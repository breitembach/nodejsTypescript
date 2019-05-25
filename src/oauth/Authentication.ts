// import { UserModel } from '../schemas/User'

// abstract class Authentication {
//     login() {
//         {
//             "access_token": "eyJ...MoQ",
//             "expires_in": 86400,
//             "scope": "motorist",
//             "id_token": "eyJ...0NE",
//             "token_type": "Bearer"
//           }
//     }
// }

class Authentication {
  public isAutenticated (req, res, next): void {
    req.data = 'save user here'
    next()
  }
}
export default new Authentication()
