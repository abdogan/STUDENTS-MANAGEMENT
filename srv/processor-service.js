const cds = require("@sap/cds");
const { Students } = cds.entities("db");

module.exports = srv => {

  srv.on("CREATE", "Students", async (req, res) => {

    let oCreatedRecord = await cds.transaction(req).run(
      INSERT.into(Students).entries({
        email: req.data.email,
        first_name: req.data.first_name,
        last_name: req.data.last_name,
        date_sign_up: req.data.date_sign_up
      })
    ).then((resolve, reject) => {

      if (typeof resolve !== "undefined") {
        return req.data;
      } else {
        req.error(500, "Bad Request")
      }
    }).catch(error => {

      req.error(500, "Error in Creation");

    });

    return oCreatedRecord;

  });

  srv.on("UPDATE", "Students", async (req, res) => {
    let sFirstName = req.data.first_name;
    let sLastName = req.data.last_name;
    let sEmail = req.data.email;
    let dDate = req.data.date_sign_up;
    let returnData = await cds
      .transaction(req)
      .run([
        UPDATE(Students)
          .set({
            email: sEmail,
            first_name: sFirstName,
            lastName: sLastName,
            date_sign_up: dDate
          })
          .where({ ID: req.data.ID })
      ])
      .then((resolve, reject) => {
        if (typeof resolve !== "undefined") {
          return req.data;
        } else {
          req.error(404, "Record Not Found");
        }
      })
      .catch(err => {
        req.error(500, "Error in Updating Record");
      });
    return returnData;
  });

  srv.on("DELETE", "Students", async (req, res) => {

    const {first_name} = await SELECT.one(req.subject, i => i.first_name).where({ ID: req.data.ID })

    if (first_name === 'john') {

      req.error(400, "Firsname is john.")
      return;

    }

    await cds.transaction(req).run(
      DELETE.from(Students).where({ ID: req.data.ID })
    ).then((resolve, reject) => {
      if (typeof resolve === "undefined") {
        req.error(409, "Record not found")
      }
    }).catch(err => {
      req.error(500, "Error by deleting the record")
    })

  })

}