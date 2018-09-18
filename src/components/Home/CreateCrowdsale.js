import React, { Component } from 'react'
import { navigateTo } from '../../utils/utils'
import storage from 'store2'
import logdown from 'logdown'

const logger = logdown('TW:Home:CreateCrowdsale')

export class CreateCrowdsale extends Component {
  goToStepOne = () => {
    try {
      if (storage.has('DeploymentStore') && storage.get('DeploymentStore').deploymentStep) {
        navigateTo(this.props.history, 'home')
      } else {
        navigateTo(this.props.history, 'stepOne')
      }
    } catch (err) {
      logger.log('Error to navigate', err)
    }
  }

  render() {
    return (
      <button onClick={() => this.goToStepOne()} className="hm-Home_BtnNew">
        New crowdsale
      </button>
    )
  }
}
