import { Address, Hex } from "viem"

export namespace TableType {
  export interface Validator {
    id: string
    validatorBLSKey: Hex
    stakeAmount: bigint
    stakedAt: bigint
  }
  export interface StakerValidator extends Validator {
    status: StakerStatus
  }
  export type StakerStatus = "Staked" | "Unstaked" | "Withdrawn"

  export interface RestakerValidator extends Validator {
    status: RestakerStatus
  }
  export type RestakerStatus =
    | "Registered"
    | "DeRegistered"
    | "DeregisteredRequested"

  export interface EigenPod {
    id: string
    podOwner: Address
    podContractAddress: Address
    validators: RestakerValidator[]
  }
  export interface EigenPodValidator extends RestakerValidator {
    podOwner: Address
    podContractAddress: Address
  }
}
