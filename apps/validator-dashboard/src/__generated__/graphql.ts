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

export type Account = {
  __typename?: 'Account';
  address: Scalars['Bytes']['output'];
  created: Scalars['BigInt']['output'];
  eigenLayerStats: AccountEigenLayerStats;
  id: Scalars['ID']['output'];
  symbioticStats: AccountSymbioticStats;
  vanillaStats: AccountVanillaStats;
};

export type AccountEigenLayerStats = {
  __typename?: 'AccountEigenLayerStats';
  account: Account;
  deregistered: Scalars['BigInt']['output'];
  deregistrationRequested: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  registered: Scalars['BigInt']['output'];
  total: Scalars['BigInt']['output'];
};

export type AccountEigenLayerStats_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<AccountEigenLayerStats_Filter>>>;
  deregistered?: InputMaybe<Scalars['BigInt']['input']>;
  deregistered_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deregistered_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deregistered_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deregistered_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deregistered_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deregistered_not?: InputMaybe<Scalars['BigInt']['input']>;
  deregistered_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deregistrationRequested?: InputMaybe<Scalars['BigInt']['input']>;
  deregistrationRequested_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deregistrationRequested_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deregistrationRequested_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deregistrationRequested_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deregistrationRequested_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deregistrationRequested_not?: InputMaybe<Scalars['BigInt']['input']>;
  deregistrationRequested_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccountEigenLayerStats_Filter>>>;
  registered?: InputMaybe<Scalars['BigInt']['input']>;
  registered_gt?: InputMaybe<Scalars['BigInt']['input']>;
  registered_gte?: InputMaybe<Scalars['BigInt']['input']>;
  registered_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  registered_lt?: InputMaybe<Scalars['BigInt']['input']>;
  registered_lte?: InputMaybe<Scalars['BigInt']['input']>;
  registered_not?: InputMaybe<Scalars['BigInt']['input']>;
  registered_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  total?: InputMaybe<Scalars['BigInt']['input']>;
  total_gt?: InputMaybe<Scalars['BigInt']['input']>;
  total_gte?: InputMaybe<Scalars['BigInt']['input']>;
  total_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  total_lt?: InputMaybe<Scalars['BigInt']['input']>;
  total_lte?: InputMaybe<Scalars['BigInt']['input']>;
  total_not?: InputMaybe<Scalars['BigInt']['input']>;
  total_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum AccountEigenLayerStats_OrderBy {
  Account = 'account',
  AccountAddress = 'account__address',
  AccountCreated = 'account__created',
  AccountId = 'account__id',
  Deregistered = 'deregistered',
  DeregistrationRequested = 'deregistrationRequested',
  Id = 'id',
  Registered = 'registered',
  Total = 'total'
}

export type AccountSymbioticStats = {
  __typename?: 'AccountSymbioticStats';
  account: Account;
  deregistered: Scalars['BigInt']['output'];
  deregistrationRequested: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  registered: Scalars['BigInt']['output'];
  total: Scalars['BigInt']['output'];
};

export type AccountSymbioticStats_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<AccountSymbioticStats_Filter>>>;
  deregistered?: InputMaybe<Scalars['BigInt']['input']>;
  deregistered_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deregistered_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deregistered_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deregistered_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deregistered_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deregistered_not?: InputMaybe<Scalars['BigInt']['input']>;
  deregistered_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deregistrationRequested?: InputMaybe<Scalars['BigInt']['input']>;
  deregistrationRequested_gt?: InputMaybe<Scalars['BigInt']['input']>;
  deregistrationRequested_gte?: InputMaybe<Scalars['BigInt']['input']>;
  deregistrationRequested_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deregistrationRequested_lt?: InputMaybe<Scalars['BigInt']['input']>;
  deregistrationRequested_lte?: InputMaybe<Scalars['BigInt']['input']>;
  deregistrationRequested_not?: InputMaybe<Scalars['BigInt']['input']>;
  deregistrationRequested_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccountSymbioticStats_Filter>>>;
  registered?: InputMaybe<Scalars['BigInt']['input']>;
  registered_gt?: InputMaybe<Scalars['BigInt']['input']>;
  registered_gte?: InputMaybe<Scalars['BigInt']['input']>;
  registered_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  registered_lt?: InputMaybe<Scalars['BigInt']['input']>;
  registered_lte?: InputMaybe<Scalars['BigInt']['input']>;
  registered_not?: InputMaybe<Scalars['BigInt']['input']>;
  registered_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  total?: InputMaybe<Scalars['BigInt']['input']>;
  total_gt?: InputMaybe<Scalars['BigInt']['input']>;
  total_gte?: InputMaybe<Scalars['BigInt']['input']>;
  total_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  total_lt?: InputMaybe<Scalars['BigInt']['input']>;
  total_lte?: InputMaybe<Scalars['BigInt']['input']>;
  total_not?: InputMaybe<Scalars['BigInt']['input']>;
  total_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum AccountSymbioticStats_OrderBy {
  Account = 'account',
  AccountAddress = 'account__address',
  AccountCreated = 'account__created',
  AccountId = 'account__id',
  Deregistered = 'deregistered',
  DeregistrationRequested = 'deregistrationRequested',
  Id = 'id',
  Registered = 'registered',
  Total = 'total'
}

export type AccountVanillaStats = {
  __typename?: 'AccountVanillaStats';
  account: Account;
  id: Scalars['ID']['output'];
  staked: Scalars['BigInt']['output'];
  total: Scalars['BigInt']['output'];
  unstaked: Scalars['BigInt']['output'];
  withdrawn: Scalars['BigInt']['output'];
};

export type AccountVanillaStats_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<AccountVanillaStats_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccountVanillaStats_Filter>>>;
  staked?: InputMaybe<Scalars['BigInt']['input']>;
  staked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  staked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  staked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  staked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  staked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  staked_not?: InputMaybe<Scalars['BigInt']['input']>;
  staked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  total?: InputMaybe<Scalars['BigInt']['input']>;
  total_gt?: InputMaybe<Scalars['BigInt']['input']>;
  total_gte?: InputMaybe<Scalars['BigInt']['input']>;
  total_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  total_lt?: InputMaybe<Scalars['BigInt']['input']>;
  total_lte?: InputMaybe<Scalars['BigInt']['input']>;
  total_not?: InputMaybe<Scalars['BigInt']['input']>;
  total_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unstaked?: InputMaybe<Scalars['BigInt']['input']>;
  unstaked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unstaked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unstaked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unstaked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unstaked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unstaked_not?: InputMaybe<Scalars['BigInt']['input']>;
  unstaked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawn?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawn_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawn_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawn_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawn_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawn_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawn_not?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawn_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum AccountVanillaStats_OrderBy {
  Account = 'account',
  AccountAddress = 'account__address',
  AccountCreated = 'account__created',
  AccountId = 'account__id',
  Id = 'id',
  Staked = 'staked',
  Total = 'total',
  Unstaked = 'unstaked',
  Withdrawn = 'withdrawn'
}

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  created?: InputMaybe<Scalars['BigInt']['input']>;
  created_gt?: InputMaybe<Scalars['BigInt']['input']>;
  created_gte?: InputMaybe<Scalars['BigInt']['input']>;
  created_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  created_lt?: InputMaybe<Scalars['BigInt']['input']>;
  created_lte?: InputMaybe<Scalars['BigInt']['input']>;
  created_not?: InputMaybe<Scalars['BigInt']['input']>;
  created_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eigenLayerStats_?: InputMaybe<AccountEigenLayerStats_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  symbioticStats_?: InputMaybe<AccountSymbioticStats_Filter>;
  vanillaStats_?: InputMaybe<AccountVanillaStats_Filter>;
};

export enum Account_OrderBy {
  Address = 'address',
  Created = 'created',
  EigenLayerStats = 'eigenLayerStats',
  EigenLayerStatsDeregistered = 'eigenLayerStats__deregistered',
  EigenLayerStatsDeregistrationRequested = 'eigenLayerStats__deregistrationRequested',
  EigenLayerStatsId = 'eigenLayerStats__id',
  EigenLayerStatsRegistered = 'eigenLayerStats__registered',
  EigenLayerStatsTotal = 'eigenLayerStats__total',
  Id = 'id',
  SymbioticStats = 'symbioticStats',
  SymbioticStatsDeregistered = 'symbioticStats__deregistered',
  SymbioticStatsDeregistrationRequested = 'symbioticStats__deregistrationRequested',
  SymbioticStatsId = 'symbioticStats__id',
  SymbioticStatsRegistered = 'symbioticStats__registered',
  SymbioticStatsTotal = 'symbioticStats__total',
  VanillaStats = 'vanillaStats',
  VanillaStatsId = 'vanillaStats__id',
  VanillaStatsStaked = 'vanillaStats__staked',
  VanillaStatsTotal = 'vanillaStats__total',
  VanillaStatsUnstaked = 'vanillaStats__unstaked',
  VanillaStatsWithdrawn = 'vanillaStats__withdrawn'
}

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

export type Network = {
  __typename?: 'Network';
  id: Scalars['ID']['output'];
  networkAddress: Scalars['Bytes']['output'];
  operators: Array<OperatorNetwork>;
};


export type NetworkOperatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorNetwork_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OperatorNetwork_Filter>;
};

export type Network_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Network_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  networkAddress?: InputMaybe<Scalars['Bytes']['input']>;
  networkAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  networkAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  networkAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  networkAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  networkAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  networkAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  networkAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  networkAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  networkAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operators_?: InputMaybe<OperatorNetwork_Filter>;
  or?: InputMaybe<Array<InputMaybe<Network_Filter>>>;
};

export enum Network_OrderBy {
  Id = 'id',
  NetworkAddress = 'networkAddress',
  Operators = 'operators'
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

export type OperatorNetwork = {
  __typename?: 'OperatorNetwork';
  id: Scalars['ID']['output'];
  network: Network;
  operator: SymbioticOperator;
};

export type OperatorNetwork_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OperatorNetwork_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  network?: InputMaybe<Scalars['String']['input']>;
  network_?: InputMaybe<Network_Filter>;
  network_contains?: InputMaybe<Scalars['String']['input']>;
  network_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  network_ends_with?: InputMaybe<Scalars['String']['input']>;
  network_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  network_gt?: InputMaybe<Scalars['String']['input']>;
  network_gte?: InputMaybe<Scalars['String']['input']>;
  network_in?: InputMaybe<Array<Scalars['String']['input']>>;
  network_lt?: InputMaybe<Scalars['String']['input']>;
  network_lte?: InputMaybe<Scalars['String']['input']>;
  network_not?: InputMaybe<Scalars['String']['input']>;
  network_not_contains?: InputMaybe<Scalars['String']['input']>;
  network_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  network_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  network_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  network_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  network_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  network_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  network_starts_with?: InputMaybe<Scalars['String']['input']>;
  network_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operator?: InputMaybe<Scalars['String']['input']>;
  operator_?: InputMaybe<SymbioticOperator_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<OperatorNetwork_Filter>>>;
};

export enum OperatorNetwork_OrderBy {
  Id = 'id',
  Network = 'network',
  NetworkId = 'network__id',
  NetworkNetworkAddress = 'network__networkAddress',
  Operator = 'operator',
  OperatorCreated = 'operator__created',
  OperatorId = 'operator__id',
  OperatorOperatorAddress = 'operator__operatorAddress'
}

export enum OperatorStatus {
  Deregistered = 'Deregistered',
  DeregistrationRequested = 'DeregistrationRequested',
  Registered = 'Registered',
  Unregistered = 'Unregistered'
}

export type OperatorVault = {
  __typename?: 'OperatorVault';
  id: Scalars['ID']['output'];
  operator: SymbioticOperator;
  vault: Vault;
};

export type OperatorVault_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OperatorVault_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  operator?: InputMaybe<Scalars['String']['input']>;
  operator_?: InputMaybe<SymbioticOperator_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<OperatorVault_Filter>>>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum OperatorVault_OrderBy {
  Id = 'id',
  Operator = 'operator',
  OperatorCreated = 'operator__created',
  OperatorId = 'operator__id',
  OperatorOperatorAddress = 'operator__operatorAddress',
  Vault = 'vault',
  VaultCreated = 'vault__created',
  VaultId = 'vault__id',
  VaultVaultAddress = 'vault__vaultAddress'
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
  account?: Maybe<Account>;
  accountEigenLayerStats?: Maybe<AccountEigenLayerStats>;
  accountEigenLayerStats_collection: Array<AccountEigenLayerStats>;
  accountSymbioticStats?: Maybe<AccountSymbioticStats>;
  accountSymbioticStats_collection: Array<AccountSymbioticStats>;
  accountVanillaStats?: Maybe<AccountVanillaStats>;
  accountVanillaStats_collection: Array<AccountVanillaStats>;
  accounts: Array<Account>;
  eigenPod?: Maybe<EigenPod>;
  eigenPods: Array<EigenPod>;
  mevCommitValidators?: Maybe<MevCommitValidators>;
  mevCommitValidators_collection: Array<MevCommitValidators>;
  network?: Maybe<Network>;
  networks: Array<Network>;
  operator?: Maybe<Operator>;
  operatorNetwork?: Maybe<OperatorNetwork>;
  operatorNetworks: Array<OperatorNetwork>;
  operatorVault?: Maybe<OperatorVault>;
  operatorVaults: Array<OperatorVault>;
  operators: Array<Operator>;
  restaker?: Maybe<Restaker>;
  restakerValidator?: Maybe<RestakerValidator>;
  restakerValidators: Array<RestakerValidator>;
  restakers: Array<Restaker>;
  staker?: Maybe<Staker>;
  stakerValidator?: Maybe<StakerValidator>;
  stakerValidators: Array<StakerValidator>;
  stakers: Array<Staker>;
  symbioticOperator?: Maybe<SymbioticOperator>;
  symbioticOperators: Array<SymbioticOperator>;
  symbioticValidator?: Maybe<SymbioticValidator>;
  symbioticValidators: Array<SymbioticValidator>;
  validator?: Maybe<Validator>;
  validators: Array<Validator>;
  vault?: Maybe<Vault>;
  vaults: Array<Vault>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountEigenLayerStatsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountEigenLayerStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountEigenLayerStats_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountEigenLayerStats_Filter>;
};


export type QueryAccountSymbioticStatsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountSymbioticStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountSymbioticStats_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountSymbioticStats_Filter>;
};


export type QueryAccountVanillaStatsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountVanillaStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountVanillaStats_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountVanillaStats_Filter>;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
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


export type QueryNetworkArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNetworksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Network_Filter>;
};


export type QueryOperatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorNetworkArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorNetworksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorNetwork_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorNetwork_Filter>;
};


export type QueryOperatorVaultArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOperatorVaultsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorVault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorVault_Filter>;
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


export type QuerySymbioticOperatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySymbioticOperatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SymbioticOperator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SymbioticOperator_Filter>;
};


export type QuerySymbioticValidatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySymbioticValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SymbioticValidator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SymbioticValidator_Filter>;
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


export type QueryVaultArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryVaultsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vault_Filter>;
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
  account?: Maybe<Account>;
  accountEigenLayerStats?: Maybe<AccountEigenLayerStats>;
  accountEigenLayerStats_collection: Array<AccountEigenLayerStats>;
  accountSymbioticStats?: Maybe<AccountSymbioticStats>;
  accountSymbioticStats_collection: Array<AccountSymbioticStats>;
  accountVanillaStats?: Maybe<AccountVanillaStats>;
  accountVanillaStats_collection: Array<AccountVanillaStats>;
  accounts: Array<Account>;
  eigenPod?: Maybe<EigenPod>;
  eigenPods: Array<EigenPod>;
  mevCommitValidators?: Maybe<MevCommitValidators>;
  mevCommitValidators_collection: Array<MevCommitValidators>;
  network?: Maybe<Network>;
  networks: Array<Network>;
  operator?: Maybe<Operator>;
  operatorNetwork?: Maybe<OperatorNetwork>;
  operatorNetworks: Array<OperatorNetwork>;
  operatorVault?: Maybe<OperatorVault>;
  operatorVaults: Array<OperatorVault>;
  operators: Array<Operator>;
  restaker?: Maybe<Restaker>;
  restakerValidator?: Maybe<RestakerValidator>;
  restakerValidators: Array<RestakerValidator>;
  restakers: Array<Restaker>;
  staker?: Maybe<Staker>;
  stakerValidator?: Maybe<StakerValidator>;
  stakerValidators: Array<StakerValidator>;
  stakers: Array<Staker>;
  symbioticOperator?: Maybe<SymbioticOperator>;
  symbioticOperators: Array<SymbioticOperator>;
  symbioticValidator?: Maybe<SymbioticValidator>;
  symbioticValidators: Array<SymbioticValidator>;
  validator?: Maybe<Validator>;
  validators: Array<Validator>;
  vault?: Maybe<Vault>;
  vaults: Array<Vault>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountEigenLayerStatsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountEigenLayerStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountEigenLayerStats_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountEigenLayerStats_Filter>;
};


export type SubscriptionAccountSymbioticStatsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountSymbioticStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountSymbioticStats_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountSymbioticStats_Filter>;
};


export type SubscriptionAccountVanillaStatsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountVanillaStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountVanillaStats_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountVanillaStats_Filter>;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
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


export type SubscriptionNetworkArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNetworksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Network_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Network_Filter>;
};


export type SubscriptionOperatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOperatorNetworkArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOperatorNetworksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorNetwork_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorNetwork_Filter>;
};


export type SubscriptionOperatorVaultArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOperatorVaultsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorVault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OperatorVault_Filter>;
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


export type SubscriptionSymbioticOperatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSymbioticOperatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SymbioticOperator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SymbioticOperator_Filter>;
};


export type SubscriptionSymbioticValidatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSymbioticValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SymbioticValidator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SymbioticValidator_Filter>;
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


export type SubscriptionVaultArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionVaultsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vault_Filter>;
};

export type SymbioticOperator = {
  __typename?: 'SymbioticOperator';
  created: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  networks: Array<OperatorNetwork>;
  operatorAddress: Scalars['Bytes']['output'];
  validators: Array<SymbioticValidator>;
  vaults: Array<OperatorVault>;
};


export type SymbioticOperatorNetworksArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorNetwork_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OperatorNetwork_Filter>;
};


export type SymbioticOperatorValidatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SymbioticValidator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SymbioticValidator_Filter>;
};


export type SymbioticOperatorVaultsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorVault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OperatorVault_Filter>;
};

export type SymbioticOperator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SymbioticOperator_Filter>>>;
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
  networks_?: InputMaybe<OperatorNetwork_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<SymbioticOperator_Filter>>>;
  validators_?: InputMaybe<SymbioticValidator_Filter>;
  vaults_?: InputMaybe<OperatorVault_Filter>;
};

export enum SymbioticOperator_OrderBy {
  Created = 'created',
  Id = 'id',
  Networks = 'networks',
  OperatorAddress = 'operatorAddress',
  Validators = 'validators',
  Vaults = 'vaults'
}

export type SymbioticValidator = {
  __typename?: 'SymbioticValidator';
  created: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  operator: SymbioticOperator;
  position: Scalars['BigInt']['output'];
  status: SymbioticValidatorStatus;
  validatorBLSKey: Scalars['Bytes']['output'];
  vault: Vault;
};

export enum SymbioticValidatorStatus {
  Deregistered = 'Deregistered',
  DeregistrationRequested = 'DeregistrationRequested',
  Registered = 'Registered'
}

export type SymbioticValidator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SymbioticValidator_Filter>>>;
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
  operator?: InputMaybe<Scalars['String']['input']>;
  operator_?: InputMaybe<SymbioticOperator_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<SymbioticValidator_Filter>>>;
  position?: InputMaybe<Scalars['BigInt']['input']>;
  position_gt?: InputMaybe<Scalars['BigInt']['input']>;
  position_gte?: InputMaybe<Scalars['BigInt']['input']>;
  position_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  position_lt?: InputMaybe<Scalars['BigInt']['input']>;
  position_lte?: InputMaybe<Scalars['BigInt']['input']>;
  position_not?: InputMaybe<Scalars['BigInt']['input']>;
  position_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  status?: InputMaybe<SymbioticValidatorStatus>;
  status_in?: InputMaybe<Array<SymbioticValidatorStatus>>;
  status_not?: InputMaybe<SymbioticValidatorStatus>;
  status_not_in?: InputMaybe<Array<SymbioticValidatorStatus>>;
  validatorBLSKey?: InputMaybe<Scalars['Bytes']['input']>;
  validatorBLSKey_contains?: InputMaybe<Scalars['Bytes']['input']>;
  validatorBLSKey_gt?: InputMaybe<Scalars['Bytes']['input']>;
  validatorBLSKey_gte?: InputMaybe<Scalars['Bytes']['input']>;
  validatorBLSKey_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  validatorBLSKey_lt?: InputMaybe<Scalars['Bytes']['input']>;
  validatorBLSKey_lte?: InputMaybe<Scalars['Bytes']['input']>;
  validatorBLSKey_not?: InputMaybe<Scalars['Bytes']['input']>;
  validatorBLSKey_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  validatorBLSKey_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vault?: InputMaybe<Scalars['String']['input']>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars['String']['input']>;
  vault_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_gt?: InputMaybe<Scalars['String']['input']>;
  vault_gte?: InputMaybe<Scalars['String']['input']>;
  vault_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_lt?: InputMaybe<Scalars['String']['input']>;
  vault_lte?: InputMaybe<Scalars['String']['input']>;
  vault_not?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains?: InputMaybe<Scalars['String']['input']>;
  vault_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  vault_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with?: InputMaybe<Scalars['String']['input']>;
  vault_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum SymbioticValidator_OrderBy {
  Created = 'created',
  Id = 'id',
  Operator = 'operator',
  OperatorCreated = 'operator__created',
  OperatorId = 'operator__id',
  OperatorOperatorAddress = 'operator__operatorAddress',
  Position = 'position',
  Status = 'status',
  ValidatorBlsKey = 'validatorBLSKey',
  Vault = 'vault',
  VaultCreated = 'vault__created',
  VaultId = 'vault__id',
  VaultVaultAddress = 'vault__vaultAddress'
}

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

export type Vault = {
  __typename?: 'Vault';
  created: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  operators: Array<OperatorVault>;
  vaultAddress: Scalars['Bytes']['output'];
};


export type VaultOperatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatorVault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OperatorVault_Filter>;
};

export type Vault_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Vault_Filter>>>;
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
  operators_?: InputMaybe<OperatorVault_Filter>;
  or?: InputMaybe<Array<InputMaybe<Vault_Filter>>>;
  vaultAddress?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  vaultAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  vaultAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Vault_OrderBy {
  Created = 'created',
  Id = 'id',
  Operators = 'operators',
  VaultAddress = 'vaultAddress'
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

export type GetDelegatedEigenPodsNonPaginatedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetDelegatedEigenPodsNonPaginatedQuery = { __typename?: 'Query', operator?: { __typename?: 'Operator', id: string, status: OperatorStatus, delegatedPods?: Array<{ __typename?: 'EigenPod', id: string, podOwner: any, podContractAddress: any, operator?: { __typename?: 'Operator', id: string } | null, restaker: { __typename?: 'Restaker', validators: Array<{ __typename?: 'RestakerValidator', id: string, validatorBLSKey: string, stakeAmount: any, stakedAt: any, status: RestakerStatus }> } }> | null } | null };

export type GetEigenPodsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  orderBy?: InputMaybe<EigenPod_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;


export type GetEigenPodsQuery = { __typename?: 'Query', restaker?: { __typename?: 'Restaker', id: string, eigenPods: Array<{ __typename?: 'EigenPod', id: string, podOwner: any, podContractAddress: any, restaker: { __typename?: 'Restaker', validators: Array<{ __typename?: 'RestakerValidator', id: string, validatorBLSKey: string, stakeAmount: any, stakedAt: any, status: RestakerStatus }> } }> } | null };

export type GetEigenPodsNonPaginatedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetEigenPodsNonPaginatedQuery = { __typename?: 'Query', restaker?: { __typename?: 'Restaker', id: string, eigenPods: Array<{ __typename?: 'EigenPod', id: string, podOwner: any, podContractAddress: any, restaker: { __typename?: 'Restaker', validators: Array<{ __typename?: 'RestakerValidator', id: string, validatorBLSKey: string, stakeAmount: any, stakedAt: any, status: RestakerStatus }> } }> } | null };

export type GetVaultsByOperatorAndNetworkQueryVariables = Exact<{
  operatorNetworkId: Scalars['ID']['input'];
}>;


export type GetVaultsByOperatorAndNetworkQuery = { __typename?: 'Query', operatorNetwork?: { __typename?: 'OperatorNetwork', operator: { __typename?: 'SymbioticOperator', id: string, vaults: Array<{ __typename?: 'OperatorVault', vault: { __typename?: 'Vault', id: string, vaultAddress: any, created: any } }> } } | null };

export type GetStakerQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  orderBy?: InputMaybe<StakerValidator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;


export type GetStakerQuery = { __typename?: 'Query', account?: { __typename?: 'Account', vanillaStats: { __typename?: 'AccountVanillaStats', total: any } } | null, staker?: { __typename?: 'Staker', id: string, created: any, validators: Array<{ __typename?: 'StakerValidator', id: string, validatorBLSKey: string, stakeAmount: any, stakedAt: any, status: StakerStatus }> } | null };

export type GetStakerNonPaginatedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetStakerNonPaginatedQuery = { __typename?: 'Query', staker?: { __typename?: 'Staker', id: string, created: any, validators: Array<{ __typename?: 'StakerValidator', id: string, validatorBLSKey: string, stakeAmount: any, stakedAt: any, status: StakerStatus }> } | null };

export type GetAllSymbioticOperatorQueryVariables = Exact<{
  operatorId: Scalars['ID']['input'];
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  orderBy?: InputMaybe<SymbioticValidator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;


export type GetAllSymbioticOperatorQuery = { __typename?: 'Query', symbioticOperator?: { __typename?: 'SymbioticOperator', id: string, operatorAddress: any, created: any, validators: Array<{ __typename?: 'SymbioticValidator', validatorBLSKey: any, created: any, position: any, status: SymbioticValidatorStatus, vault: { __typename?: 'Vault', vaultAddress: any } }> } | null };

export type GetSymbioticOperatorQueryVariables = Exact<{
  operatorId: Scalars['ID']['input'];
}>;


export type GetSymbioticOperatorQuery = { __typename?: 'Query', symbioticOperator?: { __typename?: 'SymbioticOperator', id: string, operatorAddress: any, created: any, validators: Array<{ __typename?: 'SymbioticValidator', validatorBLSKey: any, created: any, position: any, status: SymbioticValidatorStatus, vault: { __typename?: 'Vault', vaultAddress: any } }> } | null };

export type GetMevCommitMetricsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMevCommitMetricsQuery = { __typename?: 'Query', mevCommitValidators?: { __typename?: 'MevCommitValidators', totalStaked: any, totalOptedIn: any, totalRestaked: any } | null };


export const GetDelegatedEigenPodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDelegatedEigenPods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EigenPod_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"delegatedPods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"podOwner"}},{"kind":"Field","name":{"kind":"Name","value":"podContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"operator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"restaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"validatorBLSKey"}},{"kind":"Field","name":{"kind":"Name","value":"stakeAmount"}},{"kind":"Field","name":{"kind":"Name","value":"stakedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetDelegatedEigenPodsQuery, GetDelegatedEigenPodsQueryVariables>;
export const GetDelegatedEigenPodsNonPaginatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDelegatedEigenPodsNonPaginated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"delegatedPods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"podOwner"}},{"kind":"Field","name":{"kind":"Name","value":"podContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"operator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"restaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"validatorBLSKey"}},{"kind":"Field","name":{"kind":"Name","value":"stakeAmount"}},{"kind":"Field","name":{"kind":"Name","value":"stakedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetDelegatedEigenPodsNonPaginatedQuery, GetDelegatedEigenPodsNonPaginatedQueryVariables>;
export const GetEigenPodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEigenPods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EigenPod_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"restaker"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eigenPods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"podOwner"}},{"kind":"Field","name":{"kind":"Name","value":"podContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"restaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"validatorBLSKey"}},{"kind":"Field","name":{"kind":"Name","value":"stakeAmount"}},{"kind":"Field","name":{"kind":"Name","value":"stakedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEigenPodsQuery, GetEigenPodsQueryVariables>;
export const GetEigenPodsNonPaginatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEigenPodsNonPaginated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"restaker"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eigenPods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"podOwner"}},{"kind":"Field","name":{"kind":"Name","value":"podContractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"restaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"validatorBLSKey"}},{"kind":"Field","name":{"kind":"Name","value":"stakeAmount"}},{"kind":"Field","name":{"kind":"Name","value":"stakedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEigenPodsNonPaginatedQuery, GetEigenPodsNonPaginatedQueryVariables>;
export const GetVaultsByOperatorAndNetworkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVaultsByOperatorAndNetwork"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operatorNetworkId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operatorNetwork"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operatorNetworkId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"operator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"vaults"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vault"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"vaultAddress"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetVaultsByOperatorAndNetworkQuery, GetVaultsByOperatorAndNetworkQueryVariables>;
export const GetStakerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStaker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StakerValidator_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vanillaStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"staker"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"validators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"validatorBLSKey"}},{"kind":"Field","name":{"kind":"Name","value":"stakeAmount"}},{"kind":"Field","name":{"kind":"Name","value":"stakedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<GetStakerQuery, GetStakerQueryVariables>;
export const GetStakerNonPaginatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStakerNonPaginated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staker"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"validators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"validatorBLSKey"}},{"kind":"Field","name":{"kind":"Name","value":"stakeAmount"}},{"kind":"Field","name":{"kind":"Name","value":"stakedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<GetStakerNonPaginatedQuery, GetStakerNonPaginatedQueryVariables>;
export const GetAllSymbioticOperatorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllSymbioticOperator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operatorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SymbioticValidator_orderBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"symbioticOperator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operatorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"operatorAddress"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"validators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderDirection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderDirection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validatorBLSKey"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"vault"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vaultAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllSymbioticOperatorQuery, GetAllSymbioticOperatorQueryVariables>;
export const GetSymbioticOperatorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSymbioticOperator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"operatorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"symbioticOperator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"operatorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"operatorAddress"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"validators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validatorBLSKey"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"vault"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vaultAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<GetSymbioticOperatorQuery, GetSymbioticOperatorQueryVariables>;
export const GetMevCommitMetricsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMevCommitMetrics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mevCommitValidators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"mevCommitValidators","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalStaked"}},{"kind":"Field","name":{"kind":"Name","value":"totalOptedIn"}},{"kind":"Field","name":{"kind":"Name","value":"totalRestaked"}}]}}]}}]} as unknown as DocumentNode<GetMevCommitMetricsQuery, GetMevCommitMetricsQueryVariables>;