class DashBoardExternaController {
  async projetosWebHook(req, res) {
    console.log('Novo voto recebido para projetos:', req.body);
    res.status(200).json({ message: 'Voto recebido com sucesso!' })
  }
}


export default new DashBoardExternaController();