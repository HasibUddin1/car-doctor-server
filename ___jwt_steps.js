/**
 * JWT Objectives: secure your API
 * ---------------------------------
 * CREATE TOKEN
 * ---------------------------------
 * 
 * 1. after user login send user basic info to create token
 * 2. in the server side: install jsonwebtoken
 * 3. import jsonwebtoken
 * 4. jwt.sign(payload(user), secret, {expiresIn})
 * 5. return token to the client side
 * 6. after receiving the token store it either on httponly cookies or localstorage(second 
 *    best solution)
 * 
 * 7. use a general space on onAuthStateChange > AuthProvider
 * ------------------------------------
 * SEND TOKEN TO THE SERVER
 * ------------------------------------
 * 1. for sensitive API call () send authorization headers {authorization: `Bearer ${token}
 *    `}
 * ------------------------------------
 * VERIFY TOKEN
 * ------------------------------------
 * 1. create a function called verifyJWT(middleware)
 * 2. this function will have 3 parameters: req, res, next
 * 3. first check whether the authorization headers exists
 * 4. if not send 401 
 * 5. get the token out of the authorization header
 * 6. call jwt.verify(token, secret, (error, decoded))
 * 7. if error => send 401 
 * 8. set decoded to the req object so that we can retrieve it later
 * 9. call the next() to go to the next function
 * 
 * --------------------------------------
 * 1. check whether the token email matches the request email
*/