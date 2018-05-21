export class UserFeatureAccessModel {
    featureID: number;
    featureGroupId: number;
    code: string;
    name: string;
    moduleName: string;
    menuName: string;
    url: string;
    helpId: string;
    cssClassName: string;
    userId: number;
    userGroupId: number;
    deny: number;
    edit: number;
    view: number;
    delete: number;
    print: number;
    copy: number;
    active: number;
    dataflow: number;
}

export class UserList {
    name: string;
    id: number
}

export class FeatureModel {
    id: number;
    featureGroupId: number;
    code: string;
    name: string;
    moduleName: string;
    menuName: string;
    description: string;
    url: string;
    helpId: string;
    cssClassName: string;
}