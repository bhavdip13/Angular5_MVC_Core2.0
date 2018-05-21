import { UserFeatureAccessModel } from '../models/userfeatureaccessmodel';

export class CurrentUserDataModel {
    Id: number;
    Username: string;
    OrgId: number;
    Token: string;
    MenuList: UserFeatureAccessModel[];
}