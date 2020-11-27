import { ISign } from "../protocols/jwtAdapter/signJwt.interface"
import { IVerify } from "../protocols/jwtAdapter/verifyJwt.interface"

export const MockJwtSignAdapter = (): ISign => {
  class JwtSignAdapterStub implements ISign {
    sign (id: number): string {
      return 'token'
    }
  }
  return new JwtSignAdapterStub()
}



export const MockJwtVerifyAdapter = (): IVerify => {
  class JwtVerifydapterStub implements IVerify {
    verify (token: any): any {
      return { id: 1}
    }
  }
  return new JwtVerifydapterStub()
}
