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

    })

}