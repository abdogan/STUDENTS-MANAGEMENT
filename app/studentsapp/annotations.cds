using ProcessorService as service from '../../srv/processor-service';
annotate service.Students with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : '{i18n>Email}',
                Value : email,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>FirstName}',
                Value : first_name,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>LastName}',
                Value : last_name,
            },
            {
                $Type : 'UI.DataField',
                Label : '{i18n>DateSignUp}',
                Value : date_sign_up,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : '{i18n>GeneralInformation}',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : '{i18n>Email}',
            Value : email,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>Firstname}',
            Value : first_name,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>Lastname}',
            Value : last_name,
        },
        {
            $Type : 'UI.DataField',
            Label : '{i18n>SignUpDate}',
            Value : date_sign_up,
        },
    ],
);

annotate service.Students with @(
    UI.HeaderInfo : {
        TypeName : 'Student',
        TypeNamePlural : 'Students',
        Title : {
            $Type : 'UI.DataField',
            Value : email,
        },
        Description : {
            $Type : 'UI.DataField',
            Value : first_name,
        },
    }
);
