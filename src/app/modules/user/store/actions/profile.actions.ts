import { User } from "@core/models";
import { createHTTPActions } from "@shared/helpers/createHTTPActions";

enum UserActionTypes {
  Load = '[Profile] Load',
}

export interface RequestPayload {
  uid: string;
}

export interface Payload {
  profile: User
}

export const [ LoadProfile, LoadProfileSuccess, LoadProfileFailure ] = createHTTPActions<RequestPayload, Payload, any>(UserActionTypes.Load);
