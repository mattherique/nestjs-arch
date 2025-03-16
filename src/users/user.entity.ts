import { randomUUID } from "crypto";

export type UserProps = {
  name: string;
  username: string;
  email: string;
  password: string;
}

export class User {
  public readonly id: string
  public props: Required<UserProps>
  private constructor(props: UserProps, id?: string){
    this.id = id || randomUUID()
    this.props = {
      ...props
    }

  }

  static create(props: UserProps, id?: string){
    return new User(props, id)
  }

  toJson(){
    return {
      id: this.id,
      ...this.props
    }
  }

  updateEmail(email: string){
    this.email = email
  }

  get email(){
    return this.props.email
  }

  private set email(value: string){
    this.props.email = value;
  }

  updateName(name: string){
    this.name = name;
  }

  get name() {
    return this.props.name;
  }

  private set name(value: string) {
    this.props.name = value;
  }

  updateUsername(username: string){
    this.username = username
  }

  get username() {
    return this.props.username;
  }

  private set username(value: string) {
    this.props.username = value;
  }

  updatePassword(password: string){
    this.password = password
  }

  get password() {
    return this.props.password;
  }

  private set password(value: string) {
    this.props.password = value;
  }
}