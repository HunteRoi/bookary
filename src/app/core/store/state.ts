import { Features } from "../features";
import { UserState } from "./reducers/user.reducer";

export interface AppState {
  [Features.User]: UserState,
}
