import { Request, Response, NextFunction } from "express";
import { User } from "../../model/User";
import * as jwt from "jsonwebtoken";

/**
 * Adds new user
 * @api {post} /user
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export function addUser(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Added User");
}


/**
 * Update user's information
 * @api {put} /user
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */

export function updateUser(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Updated User");
}


/**
 * Fetches all users
 * @api {get} /user
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export function getUsers(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Get Users");

}


/**
 * Fetches user's record
 * @api {get} /user/:id
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export function getUser(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Get User Info");
  return User.find({})
}


/**
 * Deletes user record by id
 * @api {delete} /user/:id
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export function deleteUser(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Deleted User");
}

/**
 * Login user record by entryId
 * @api {login} /login
 *
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function loginUser (req: Request, res: Response, next: NextFunction) {
  const entryId = parseInt(req.body.entryId);

  try {
    const user = await User.findOne({ entryId });

    if(!user) {
      return res.status(400).json({ message: 'Id Not Exist' });
    } else {
      const payload = { user: { id: user.entryId } }
      jwt.sign( 
        payload, 'mySecretKey', { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token, message: 'Succesfully login' });
      });
    } 
    // end of the condition
  } catch(e) {
    console.error(e);
    res.status(500).json({ message: "Server Error"});
  }
}

