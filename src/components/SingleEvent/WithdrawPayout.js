import React from 'react'

import { PartyQuery } from '../../graphql/queries'
import ChainMutation, { ChainMutationButton } from '../ChainMutation'
import { WithdrawPayout } from '../../graphql/mutations'


const WithdrawPayoutButton = ({ address, amount, className }) => (
  <ChainMutation
    mutation={WithdrawPayout}
    resultKey='withdrawPayout'
    variables={{ address }}
    refetchQueries={[{ query: PartyQuery, variables: { address }}]}
  >
    {(withdrawPayout, result) => (
      <ChainMutationButton onClick={withdrawPayout} result={result} className={className}
        title={`Withdraw payout - ${amount} ETH`}
      />
    )}
  </ChainMutation>
)

export default WithdrawPayoutButton
