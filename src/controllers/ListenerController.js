class ListenerController {
  async projetosWebHook(req, res) {
    console.log('Novo voto recebido para projetos:', req.body);
    res.status(200).json({message: 'Voto recebido com sucesso!'});
  }
  async representantesWebHook(req, res) {
    console.log('Novo voto recebido para representantes:', req.body);
    res.status(200).json({message: 'Voto recebido com sucesso!'});
  }
}
export default new ListenerController();
