/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
  /**
   * A string representation of microseconds UNIX timestamp (16 digits)
   *
   */
  Timestamp: { input: any; output: any; }
};

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type EigenPod = {
  __typename?: 'EigenPod';
  id: Scalars['ID']['output'];
  operator?: Maybe<Operator>;
  podContractAddress: Scalars['Bytes']['output'];
  podOwner: Scalars['Bytes']['output'];
  restaker: Restaker;
};

export type EigenPod_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EigenPod_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  operator?: InputMaybe<Scalars['String']['input']>;
  operator_?: InputMaybe<Operator_Filter>;
  operator_contains?: InputMaybe<Scalars['String']['input']>;
  operator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_ends_with?: InputMaybe<Scalars['String']['input']>;
  operator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_gt?: InputMaybe<Scalars['String']['input']>;
  operator_gte?: InputMaybe<Scalars['String']['input']>;
  operator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operator_lt?: InputMaybe<Scalars['String']['input']>;
  operator_lte?: InputMaybe<Scalars['String']['input']>;
  operator_not?: InputMaybe<Scalars['String']['input']>;
  operator_not_contains?: InputMaybe<Scalars['String']['input']>;
  operator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  operator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  operator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator_starts_with?: InputMaybe<Scalars['String']['input']>;
  operator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<EigenPod_Filter>>>;
  podContractAddress?: InputMaybe<Scalars['Bytes']['input']>;
  podContractAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  podContractAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  podContractAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  podContractAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  podContractAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  podContractAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  podContractAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  podContractAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  podContractAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  podOwner?: InputMaybe<Scalars['Bytes']['input']>;
  podOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  podOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  podOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  podOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  podOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  podOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  podOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  podOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  podOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  restaker?: InputMaybe<Scalars['String']['input']>;
  restaker_?: InputMaybe<Restaker_Filter>;
  restaker_contains?: InputMaybe<Scalars['String']['input']>;
  restaker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  restaker_ends_with?: InputMaybe<Scalars['String']['input']>;
  restaker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  restaker_gt?: InputMaybe<Scalars['String']['input']>;
  restaker_gte?: InputMaybe<Scalars['String']['input']>;
  restaker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  restaker_lt?: InputMaybe<Scalars['String']['input']>;
  restaker_lte?: InputMaybe<Scalars['String']['input']>;
  restaker_not?: InputMaybe<Scalars['String']['input']>;
  restaker_not_contains?: InputMaybe<Scalars['String']['input']>;
  restaker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  restaker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  restaker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  restaker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  restaker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  restaker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  restaker_starts_with?: InputMaybe<Scalars['String']['input']>;
  restaker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum EigenPod_OrderBy {
  Id = 'id',
  Operator = 'operator',
  OperatorCreated = 'operator__created',
  OperatorId = 'operator__id',
  OperatorOperatorAddress = 'operator__operatorAddress',
  OperatorStatus = 'operator__status',
  PodContractAddress = 'podContractAddress',
  PodOwner = 'podOwner',
  Restaker = 'restaker',
  RestakerCreated = 'restaker__created',
  RestakerId = 'restaker__id'
}

export type MevCommitValidators = {
  __typename?: 'MevCommitValidators';
  id: Scalars['ID']['output'];
  totalOptedIn: Scalars['BigInt']['output'];
  totalRestaked: Scalars['BigInt']['output'];
  totalStaked: Scalars['BigInt']['output'];
};

export type MevCommitValidators_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MevCommitValidators_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MevCommitValidators_Filter>>>;
  totalOptedIn?: InputMaybe<Scalars['BigInt']['input']>;
  totalOptedIn_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOptedIn_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOptedIn_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalOptedIn_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalOptedIn_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalOptedIn_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalOptedIn_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalRestaked?: InputMaybe<Scalars['BigInt']['input']>;
  totalRestaked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalRestaked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalRestaked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalRestaked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalRestaked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalRestaked_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalRestaked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStaked?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStaked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum MevCommitValidators_OrderBy {
  Id = 'id',
  TotalOptedIn = 'totalOptedIn',
  TotalRestaked = 'totalRestaked',
  TotalStaked = 'totalStaked'
}

export type Operator = {
  __typename?: 'Operator';
  created: Scalars['BigInt']['output'];
  delegatedPods?: Maybe<Array<EigenPod>>;
  id: Scalars['ID']['output'];
  operatorAddress: Scalars['Bytes']['output'];
  status: OperatorStatus;
};


export type OperatorDelegatedPodsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EigenPod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EigenPod_Filter>;
};

export enum OperatorStatus {
  Deregistered = 'Deregistered',
  DeregistrationRequested = 'DeregistrationRequested',
  Registered = 'Registered',
  Unregistered = 'Unregistered'
}

export type Operator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Operator_Filter>>>;
  created?: InputMaybe<Scalars['BigInt']['input']>;
  created_gt?: InputMaybe<Scalars['BigInt']['input']>;
  created_gte?: InputMaybe<Scalars['BigInt']['input']>;
  created_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  created_lt?: InputMaybe<Scalars['BigInt']['input']>;
  created_lte?: InputMaybe<Scalars['BigInt']['input']>;
  created_not?: InputMaybe<Scalars['BigInt']['input']>;
  created_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedPods_?: InputMaybe<EigenPod_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  operatorAddress?: InputMaybe<Scalars['Bytes']['input']>;
  operatorAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operatorAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operatorAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operatorAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operatorAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operatorAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operatorAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  operatorAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operatorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Operator_Filter>>>;
  status?: InputMaybe<OperatorStatus>;
  status_in?: InputMaybe<Array<OperatorStatus>>;
  status_not?: InputMaybe<OperatorStatus>;
  status_not_in?: InputMaybe<Array<OperatorStatus>>;
};

export enum Operator_OrderBy {
  Created = 'created',
  DelegatedPods = 'delegatedPods',
  Id = 'id',
  OperatorAddress = 'operatorAddress',
  Status = 'status'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  eigenPod?: Maybe<EigenPod>;
  eigenPods: Array<EigenPod>;
  mevCommitValidators?: Maybe<MevCommitValidators>;
  mevCommitValidators_collection: Array<MevCommitValidators>;
  operator?: Maybe<Operator>;
  operators: Array<Operator>;
  restaker?: Maybe<Restaker>;
  restakerValidator?: Maybe<RestakerValidator>;
  restakerValidators: Array<RestakerValidator>;
  restakers: Array<Restaker>;
  staker?: Maybe<Staker>;
  stakerValidator?: Maybe<StakerValidator>;
  stakerValidators: Array<StakerValidator>;
  stakers: Array<Staker>;
  validator?: Maybe<Validator>;
  validators: Array<Validator>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryEigenPodArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEigenPodsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EigenPod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EigenPod_Filter>;
};


export type QueryMevCommitValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMevCommitValidators_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MevCommitValidators_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MevCommitValidators_Filter>;
};


export type QueryOperatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Operator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Operator_Filter>;
};


export type QueryRestakerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRestakerValidatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRestakerValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RestakerValidator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RestakerValidator_Filter>;
};


export type QueryRestakersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Restaker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Restaker_Filter>;
};


export type QueryStakerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStakerValidatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStakerValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakerValidator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StakerValidator_Filter>;
};


export type QueryStakersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Staker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Staker_Filter>;
};


export type QueryValidatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Validator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Validator_Filter>;
};

export type Restaker = {
  __typename?: 'Restaker';
  created: Scalars['BigInt']['output'];
  eigenPods: Array<EigenPod>;
  id: Scalars['ID']['output'];
  validators: Array<RestakerValidator>;
};


export type RestakerEigenPodsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EigenPod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EigenPod_Filter>;
};


export type RestakerValidatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RestakerValidator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RestakerValidator_Filter>;
};

export enum RestakerStatus {
  Deregistered = 'Deregistered',
  DeregistrationRequested = 'DeregistrationRequested',
  Registered = 'Registered'
}

export type RestakerValidator = {
  __typename?: 'RestakerValidator';
  id: Scalars['ID']['output'];
  restaker: Restaker;
  stakeAmount: Scalars['BigInt']['output'];
  stakedAt: Scalars['BigInt']['output'];
  status: RestakerStatus;
  validatorBLSKey: Scalars['String']['output'];
};

export type RestakerValidator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RestakerValidator_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RestakerValidator_Filter>>>;
  restaker?: InputMaybe<Scalars['String']['input']>;
  restaker_?: InputMaybe<Restaker_Filter>;
  restaker_contains?: InputMaybe<Scalars['String']['input']>;
  restaker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  restaker_ends_with?: InputMaybe<Scalars['String']['input']>;
  restaker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  restaker_gt?: InputMaybe<Scalars['String']['input']>;
  restaker_gte?: InputMaybe<Scalars['String']['input']>;
  restaker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  restaker_lt?: InputMaybe<Scalars['String']['input']>;
  restaker_lte?: InputMaybe<Scalars['String']['input']>;
  restaker_not?: InputMaybe<Scalars['String']['input']>;
  restaker_not_contains?: InputMaybe<Scalars['String']['input']>;
  restaker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  restaker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  restaker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  restaker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  restaker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  restaker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  restaker_starts_with?: InputMaybe<Scalars['String']['input']>;
  restaker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stakeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  status?: InputMaybe<RestakerStatus>;
  status_in?: InputMaybe<Array<RestakerStatus>>;
  status_not?: InputMaybe<RestakerStatus>;
  status_not_in?: InputMaybe<Array<RestakerStatus>>;
  validatorBLSKey?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_contains?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_ends_with?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_gt?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_gte?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_in?: InputMaybe<Array<Scalars['String']['input']>>;
  validatorBLSKey_lt?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_lte?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_contains?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  validatorBLSKey_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_starts_with?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum RestakerValidator_OrderBy {
  Id = 'id',
  Restaker = 'restaker',
  RestakerCreated = 'restaker__created',
  RestakerId = 'restaker__id',
  StakeAmount = 'stakeAmount',
  StakedAt = 'stakedAt',
  Status = 'status',
  ValidatorBlsKey = 'validatorBLSKey'
}

export type Restaker_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Restaker_Filter>>>;
  created?: InputMaybe<Scalars['BigInt']['input']>;
  created_gt?: InputMaybe<Scalars['BigInt']['input']>;
  created_gte?: InputMaybe<Scalars['BigInt']['input']>;
  created_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  created_lt?: InputMaybe<Scalars['BigInt']['input']>;
  created_lte?: InputMaybe<Scalars['BigInt']['input']>;
  created_not?: InputMaybe<Scalars['BigInt']['input']>;
  created_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eigenPods_?: InputMaybe<EigenPod_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Restaker_Filter>>>;
  validators_?: InputMaybe<RestakerValidator_Filter>;
};

export enum Restaker_OrderBy {
  Created = 'created',
  EigenPods = 'eigenPods',
  Id = 'id',
  Validators = 'validators'
}

export type Staker = {
  __typename?: 'Staker';
  created: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  validators: Array<StakerValidator>;
};


export type StakerValidatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakerValidator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StakerValidator_Filter>;
};

export enum StakerStatus {
  Staked = 'Staked',
  Unstaked = 'Unstaked',
  Withdrawn = 'Withdrawn'
}

export type StakerValidator = {
  __typename?: 'StakerValidator';
  id: Scalars['ID']['output'];
  stakeAmount: Scalars['BigInt']['output'];
  stakedAt: Scalars['BigInt']['output'];
  staker: Staker;
  status: StakerStatus;
  validatorBLSKey: Scalars['String']['output'];
};

export type StakerValidator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<StakerValidator_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<StakerValidator_Filter>>>;
  stakeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  staker?: InputMaybe<Scalars['String']['input']>;
  staker_?: InputMaybe<Staker_Filter>;
  staker_contains?: InputMaybe<Scalars['String']['input']>;
  staker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_ends_with?: InputMaybe<Scalars['String']['input']>;
  staker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_gt?: InputMaybe<Scalars['String']['input']>;
  staker_gte?: InputMaybe<Scalars['String']['input']>;
  staker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  staker_lt?: InputMaybe<Scalars['String']['input']>;
  staker_lte?: InputMaybe<Scalars['String']['input']>;
  staker_not?: InputMaybe<Scalars['String']['input']>;
  staker_not_contains?: InputMaybe<Scalars['String']['input']>;
  staker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  staker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  staker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  staker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  staker_starts_with?: InputMaybe<Scalars['String']['input']>;
  staker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<StakerStatus>;
  status_in?: InputMaybe<Array<StakerStatus>>;
  status_not?: InputMaybe<StakerStatus>;
  status_not_in?: InputMaybe<Array<StakerStatus>>;
  validatorBLSKey?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_contains?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_ends_with?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_gt?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_gte?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_in?: InputMaybe<Array<Scalars['String']['input']>>;
  validatorBLSKey_lt?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_lte?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_contains?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  validatorBLSKey_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_starts_with?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum StakerValidator_OrderBy {
  Id = 'id',
  StakeAmount = 'stakeAmount',
  StakedAt = 'stakedAt',
  Staker = 'staker',
  StakerCreated = 'staker__created',
  StakerId = 'staker__id',
  Status = 'status',
  ValidatorBlsKey = 'validatorBLSKey'
}

export type Staker_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Staker_Filter>>>;
  created?: InputMaybe<Scalars['BigInt']['input']>;
  created_gt?: InputMaybe<Scalars['BigInt']['input']>;
  created_gte?: InputMaybe<Scalars['BigInt']['input']>;
  created_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  created_lt?: InputMaybe<Scalars['BigInt']['input']>;
  created_lte?: InputMaybe<Scalars['BigInt']['input']>;
  created_not?: InputMaybe<Scalars['BigInt']['input']>;
  created_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Staker_Filter>>>;
  validators_?: InputMaybe<StakerValidator_Filter>;
};

export enum Staker_OrderBy {
  Created = 'created',
  Id = 'id',
  Validators = 'validators'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  eigenPod?: Maybe<EigenPod>;
  eigenPods: Array<EigenPod>;
  mevCommitValidators?: Maybe<MevCommitValidators>;
  mevCommitValidators_collection: Array<MevCommitValidators>;
  operator?: Maybe<Operator>;
  operators: Array<Operator>;
  restaker?: Maybe<Restaker>;
  restakerValidator?: Maybe<RestakerValidator>;
  restakerValidators: Array<RestakerValidator>;
  restakers: Array<Restaker>;
  staker?: Maybe<Staker>;
  stakerValidator?: Maybe<StakerValidator>;
  stakerValidators: Array<StakerValidator>;
  stakers: Array<Staker>;
  validator?: Maybe<Validator>;
  validators: Array<Validator>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionEigenPodArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEigenPodsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EigenPod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EigenPod_Filter>;
};


export type SubscriptionMevCommitValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMevCommitValidators_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MevCommitValidators_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MevCommitValidators_Filter>;
};


export type SubscriptionOperatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOperatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Operator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Operator_Filter>;
};


export type SubscriptionRestakerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRestakerValidatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRestakerValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RestakerValidator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RestakerValidator_Filter>;
};


export type SubscriptionRestakersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Restaker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Restaker_Filter>;
};


export type SubscriptionStakerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStakerValidatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStakerValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StakerValidator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StakerValidator_Filter>;
};


export type SubscriptionStakersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Staker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Staker_Filter>;
};


export type SubscriptionValidatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Validator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Validator_Filter>;
};

export type Validator = {
  id: Scalars['ID']['output'];
  mevCommitValidator: MevCommitValidators;
  stakeAmount: Scalars['BigInt']['output'];
  stakedAt: Scalars['BigInt']['output'];
  validatorBLSKey: Scalars['String']['output'];
};

export type Validator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Validator_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  mevCommitValidator?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_?: InputMaybe<MevCommitValidators_Filter>;
  mevCommitValidator_contains?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_ends_with?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_gt?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_gte?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mevCommitValidator_lt?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_lte?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_not?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_not_contains?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  mevCommitValidator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_starts_with?: InputMaybe<Scalars['String']['input']>;
  mevCommitValidator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Validator_Filter>>>;
  stakeAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakeAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  validatorBLSKey?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_contains?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_ends_with?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_gt?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_gte?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_in?: InputMaybe<Array<Scalars['String']['input']>>;
  validatorBLSKey_lt?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_lte?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_contains?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  validatorBLSKey_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_starts_with?: InputMaybe<Scalars['String']['input']>;
  validatorBLSKey_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Validator_OrderBy {
  Id = 'id',
  MevCommitValidator = 'mevCommitValidator',
  MevCommitValidatorId = 'mevCommitValidator__id',
  MevCommitValidatorTotalOptedIn = 'mevCommitValidator__totalOptedIn',
  MevCommitValidatorTotalRestaked = 'mevCommitValidator__totalRestaked',
  MevCommitValidatorTotalStaked = 'mevCommitValidator__totalStaked',
  StakeAmount = 'stakeAmount',
  StakedAt = 'stakedAt',
  ValidatorBlsKey = 'validatorBLSKey'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetDelegatedEigenPodsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  orderBy?: InputMaybe<EigenPod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;


export type GetDelegatedEigenPodsQuery = { __typename?: 'Query', operator?: { __typename?: 'Operator', id: string, status: OperatorStatus, delegatedPods?: Array<{ __typename?: 'EigenPod', id: string, podOwner: any, podContractAddress: any, operator?: { __typename?: 'Operator', id: string } | null, restaker: { __typename?: 'Restaker', validators: Array<{ __typename?: 'RestakerValidator', id: string, validatorBLSKey: string, stakeAmount: any, stakedAt: any, status: RestakerStatus }> } }> | null } | null };

export type GetEigenPodsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  orderBy?: InputMaybe<EigenPod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;


export type GetEigenPodsQuery = { __typename?: 'Query', restaker?: { __typename?: 'Restaker', id: string, eigenPods: Array<{ __typename?: 'EigenPod', id: string, podOwner: any, podContractAddress: any, restaker: { __typename?: 'Restaker', validators: Array<{ __typename?: 'RestakerValidator', id: string, validatorBLSKey: string, stakeAmount: any, stakedAt: any, status: RestakerStatus }> } }> } | null };

export type GetStakerQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  orderBy?: InputMaybe<StakerValidator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;


export type GetStakerQuery = { __typename?: 'Query', staker?: { __typename?: 'Staker', id: string, created: any, validators: Array<{ __typename?: 'StakerValidator', id: string, validatorBLSKey: string, stakeAmount: any, stakedAt: any, status: StakerStatus }> } | null };


export const GetDelegatedEigenPodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDelegatedEigenPods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EigenPod_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"delegatedPods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"podOwner"}},{"kind":"Field","name":{"kind":"Name","value":"podContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"operator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"restaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"validatorBLSKey"}},{"kind":"Field","name":{"kind":"Name","value":"stakeAmount"}},{"kind":"Field","name":{"kind":"Name","value":"stakedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetDelegatedEigenPodsQuery, GetDelegatedEigenPodsQueryVariables>;
export const GetEigenPodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEigenPods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EigenPod_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"restaker"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eigenPods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"podOwner"}},{"kind":"Field","name":{"kind":"Name","value":"podContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"restaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"validatorBLSKey"}},{"kind":"Field","name":{"kind":"Name","value":"stakeAmount"}},{"kind":"Field","name":{"kind":"Name","value":"stakedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEigenPodsQuery, GetEigenPodsQueryVariables>;
export const GetStakerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStaker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StakerValidator_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staker"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"validators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"validatorBLSKey"}},{"kind":"Field","name":{"kind":"Name","value":"stakeAmount"}},{"kind":"Field","name":{"kind":"Name","value":"stakedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<GetStakerQuery, GetStakerQueryVariables>;