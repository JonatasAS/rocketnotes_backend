//neste arquivo estamos gerando nosso jwt na aplicação, com sua key e o tempo que expira a autenticação
module.exports = {
  jwt: {
    secret: process.env.AUTH_SECRET || "default",
    expiresIn: "1d",
  }
}
