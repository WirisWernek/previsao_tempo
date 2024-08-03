import { CurrentInterface } from "./Current.interface";
import { LocationInterface } from "./Location.interface";

export interface ClimaInterface {
  location: LocationInterface;
  current: CurrentInterface;
}
