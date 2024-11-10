import { Address, Hex } from "viem"

export namespace TableType {
  export interface Validator {
    id: string
    validatorBLSKey: Hex
    stakeAmount: bigint
    stakedAt: bigint
    status: StakerStatus | RestakerStatus | SymbioticStatus
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
    | "Deregistered"
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
  export interface SymbioticValidator {
    id: string
    validatorBLSKey: Hex
    created: bigint
    vaultAddress: Address
    position: bigint
    status: SymbioticStatus
  }
  export type SymbioticStatus = "Registered" | "Deregistered"
}

export type Vault = {
  id: Address
  vaultAddress: Address
  created: bigint
}
