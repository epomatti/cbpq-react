import React from 'react'
import * as api from '../io/api'
import { ListGroup, ListGroupItem } from 'reactstrap';

class LicenseView extends React.Component {
  state = {
    loading: true
  }
  componentDidMount() {
    const { cbpq, cpf } = this.props.match.params
    if (cbpq) {
      api.getLicenseCbpq(cbpq).then(license => {
        this.setState({ license, loading: false })
      })
    } else if (cpf) {
      api.getLicenseCpf(cpf).then(license => {
        this.setState({ license, loading: false })
      })
    }
  }
  buildItem = (label, key) => {
    const { license } = this.state
    return <ListGroupItem>
      {`${label}: ${license[key]}`}
    </ListGroupItem>
  }
  render() {
    const { loading, license } = this.state
    if (loading) {
      return 'Loading'
    }
    console.log(license.image)
    return <ListGroup>
      {this.buildItem('Atleta', 'atleta')}
      {this.buildItem('Status', 'status')}
      {this.buildItem('CBPQ', 'cbpq')}
      {this.buildItem('Categoria', 'categoria')}
      {this.buildItem('Clube', 'clube')}
      {this.buildItem('Federação', 'federacao')}
      {this.buildItem('Habilitação', 'habilitacao')}
      {this.buildItem('Filiação', 'filiacao')}
      {this.buildItem('Validade', 'validade')}
      {this.buildItem('Emissão', 'emissao')}
    </ListGroup>
  }

}

export default LicenseView