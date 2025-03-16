import { User, UserProps } from "./user.entity"

describe('User unit test', () => {
  it("Should create a user", () => {
    let userProps: UserProps = {
      name: "Name Test",
      username: "nickname123",
      email: "emailtest@email.com",
      password: "passwordtest"
    }

    const user = User.create(userProps);
    expect(user.props).toEqual({
      ...userProps
    })
  })

  it("Should transform User into Json Object", () => {
    let userProps: UserProps = {
      name: "Name Test",
      username: "nickname123",
      email: "emailtest@email.com",
      password: "passwordtest"
    }

    const user = User.create(userProps);

    expect(user.toJson()).toStrictEqual({
      id: user.id,
      name: "Name Test",
      username: "nickname123",
      email: "emailtest@email.com",
      password: "passwordtest"
    })
  })

  it("Should update the user's email", () => {
    let userProps: UserProps = {
      name: "Name Test",
      username: "nickname123",
      email: "emailtest@email.com",
      password: "passwordtest"
    }

    const user = User.create(userProps);
    user.updateEmail("newemail@email.com");

    expect(user.email).toBe("newemail@email.com");
  })

  it("Should update the user's name", () => {
    let userProps: UserProps = {
      name: "Name Test",
      username: "nickname123",
      email: "emailtest@email.com",
      password: "passwordtest"
    }

    const user = User.create(userProps);
    user.updateName("New Name");

    expect(user.name).toBe("New Name");
  })

  it("Should update the user's username", () => {
    let userProps: UserProps = {
      name: "Name Test",
      username: "nickname123",
      email: "emailtest@email.com",
      password: "passwordtest"
    }

    const user = User.create(userProps);
    user.updateUsername("newnickname");

    expect(user.username).toBe("newnickname");
  })

  it("Should update the user's password", () => {
    let userProps: UserProps = {
      name: "Name Test",
      username: "nickname123",
      email: "emailtest@email.com",
      password: "passwordtest"
    }

    const user = User.create(userProps);
    user.updatePassword("newpassword");

    expect(user.password).toBe("newpassword");
  })
})