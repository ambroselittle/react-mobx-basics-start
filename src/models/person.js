import { observable } from "mobx";

export default class Person {
  @observable type = "employee";
  @observable name = "";
  @observable belongsWith = "";
}
