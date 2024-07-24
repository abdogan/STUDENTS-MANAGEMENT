using { cuid } from '@sap/cds/common';
namespace db;

entity Students : cuid{
        email: String(65);
        first_name: String(20);
        last_name: String(20);
        date_sign_up: Date;
}

