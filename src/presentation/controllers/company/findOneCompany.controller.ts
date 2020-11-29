import { IDbFindOneCompany } from '@/domain/usecases/company/findOneCompany.interface'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class FindOneCompanyController implements IController {
  constructor (
    private readonly dbFindOneCompany: IDbFindOneCompany
  ) {}

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const { userId } = httpRequest

    const company = await this.dbFindOneCompany.findOne(userId)

    return {
      statusCode: 200,
      body: company
    }
  }
}
