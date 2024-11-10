/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetDelegatedEigenPods(\n    $id: ID!\n    $first: Int!\n    $skip: Int!\n    $orderBy: EigenPod_orderBy\n    $orderDirection: OrderDirection\n  ) {\n    operator(id: $id) {\n      id\n      status\n      delegatedPods(\n        first: $first\n        skip: $skip\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n      ) {\n        id\n        podOwner\n        podContractAddress\n        operator {\n          id\n        }\n        restaker {\n          validators {\n            id\n            validatorBLSKey\n            stakeAmount\n            stakedAt\n            status\n          }\n        }\n      }\n    }\n  }\n": types.GetDelegatedEigenPodsDocument,
    "\n  query GetDelegatedEigenPodsNonPaginated($id: ID!) {\n    operator(id: $id) {\n      id\n      status\n      delegatedPods {\n        id\n        podOwner\n        podContractAddress\n        operator {\n          id\n        }\n        restaker {\n          validators {\n            id\n            validatorBLSKey\n            stakeAmount\n            stakedAt\n            status\n          }\n        }\n      }\n    }\n  }\n": types.GetDelegatedEigenPodsNonPaginatedDocument,
    "\n  query GetEigenPods(\n    $id: ID!\n    $first: Int!\n    $skip: Int!\n    $orderBy: EigenPod_orderBy\n    $orderDirection: OrderDirection\n  ) {\n    restaker(id: $id) {\n      id\n      eigenPods(\n        first: $first\n        skip: $skip\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n      ) {\n        id\n        podOwner\n        podContractAddress\n        restaker {\n          validators {\n            id\n            validatorBLSKey\n            stakeAmount\n            stakedAt\n            status\n          }\n        }\n      }\n    }\n  }\n": types.GetEigenPodsDocument,
    "\n  query GetEigenPodsNonPaginated($id: ID!) {\n    restaker(id: $id) {\n      id\n      eigenPods {\n        id\n        podOwner\n        podContractAddress\n        restaker {\n          validators {\n            id\n            validatorBLSKey\n            stakeAmount\n            stakedAt\n            status\n          }\n        }\n      }\n    }\n  }\n": types.GetEigenPodsNonPaginatedDocument,
    "\n  query GetVaultsByOperatorAndNetwork($operatorNetworkId: ID!) {\n    operatorNetwork(id: $operatorNetworkId) {\n      operator {\n        id\n        vaults {\n          vault {\n            id\n            vaultAddress\n            created\n          }\n        }\n      }\n    }\n  }\n": types.GetVaultsByOperatorAndNetworkDocument,
    "\n  query GetStaker(\n    $id: ID!\n    $first: Int!\n    $skip: Int!\n    $orderBy: StakerValidator_orderBy\n    $orderDirection: OrderDirection\n  ) {\n    staker(id: $id) {\n      id\n      created\n      validators(\n        first: $first\n        skip: $skip\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n      ) {\n        id\n        validatorBLSKey\n        stakeAmount\n        stakedAt\n        status\n      }\n    }\n  }\n": types.GetStakerDocument,
    "\n  query GetStakerNonPaginated($id: ID!) {\n    staker(id: $id) {\n      id\n      created\n      validators {\n        id\n        validatorBLSKey\n        stakeAmount\n        stakedAt\n        status\n      }\n    }\n  }\n": types.GetStakerNonPaginatedDocument,
    "\n  query GetAllSymbioticOperator(\n    $operatorId: ID!\n    $first: Int!\n    $skip: Int!\n    $orderBy: SymbioticValidator_orderBy\n    $orderDirection: OrderDirection\n  ) {\n    symbioticOperator(id: $operatorId) {\n      id\n      operatorAddress\n      created\n      validators(\n        first: $first\n        skip: $skip\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n      ) {\n        validatorBLSKey\n        created\n        vault {\n          vaultAddress\n        }\n        position\n        status\n      }\n    }\n  }\n": types.GetAllSymbioticOperatorDocument,
    "\n  query GetSymbioticOperator($operatorId: ID!) {\n    symbioticOperator(id: $operatorId) {\n      id\n      operatorAddress\n      created\n      validators {\n        validatorBLSKey\n        created\n        vault {\n          vaultAddress\n        }\n        position\n        status\n      }\n    }\n  }\n": types.GetSymbioticOperatorDocument,
    "\n    query GetMevCommitMetrics {\n      mevCommitValidators(id: \"mevCommitValidators\") {\n        totalStaked\n        totalOptedIn\n        totalRestaked\n      }\n    }\n  ": types.GetMevCommitMetricsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetDelegatedEigenPods(\n    $id: ID!\n    $first: Int!\n    $skip: Int!\n    $orderBy: EigenPod_orderBy\n    $orderDirection: OrderDirection\n  ) {\n    operator(id: $id) {\n      id\n      status\n      delegatedPods(\n        first: $first\n        skip: $skip\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n      ) {\n        id\n        podOwner\n        podContractAddress\n        operator {\n          id\n        }\n        restaker {\n          validators {\n            id\n            validatorBLSKey\n            stakeAmount\n            stakedAt\n            status\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetDelegatedEigenPods(\n    $id: ID!\n    $first: Int!\n    $skip: Int!\n    $orderBy: EigenPod_orderBy\n    $orderDirection: OrderDirection\n  ) {\n    operator(id: $id) {\n      id\n      status\n      delegatedPods(\n        first: $first\n        skip: $skip\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n      ) {\n        id\n        podOwner\n        podContractAddress\n        operator {\n          id\n        }\n        restaker {\n          validators {\n            id\n            validatorBLSKey\n            stakeAmount\n            stakedAt\n            status\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetDelegatedEigenPodsNonPaginated($id: ID!) {\n    operator(id: $id) {\n      id\n      status\n      delegatedPods {\n        id\n        podOwner\n        podContractAddress\n        operator {\n          id\n        }\n        restaker {\n          validators {\n            id\n            validatorBLSKey\n            stakeAmount\n            stakedAt\n            status\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetDelegatedEigenPodsNonPaginated($id: ID!) {\n    operator(id: $id) {\n      id\n      status\n      delegatedPods {\n        id\n        podOwner\n        podContractAddress\n        operator {\n          id\n        }\n        restaker {\n          validators {\n            id\n            validatorBLSKey\n            stakeAmount\n            stakedAt\n            status\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEigenPods(\n    $id: ID!\n    $first: Int!\n    $skip: Int!\n    $orderBy: EigenPod_orderBy\n    $orderDirection: OrderDirection\n  ) {\n    restaker(id: $id) {\n      id\n      eigenPods(\n        first: $first\n        skip: $skip\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n      ) {\n        id\n        podOwner\n        podContractAddress\n        restaker {\n          validators {\n            id\n            validatorBLSKey\n            stakeAmount\n            stakedAt\n            status\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEigenPods(\n    $id: ID!\n    $first: Int!\n    $skip: Int!\n    $orderBy: EigenPod_orderBy\n    $orderDirection: OrderDirection\n  ) {\n    restaker(id: $id) {\n      id\n      eigenPods(\n        first: $first\n        skip: $skip\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n      ) {\n        id\n        podOwner\n        podContractAddress\n        restaker {\n          validators {\n            id\n            validatorBLSKey\n            stakeAmount\n            stakedAt\n            status\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetEigenPodsNonPaginated($id: ID!) {\n    restaker(id: $id) {\n      id\n      eigenPods {\n        id\n        podOwner\n        podContractAddress\n        restaker {\n          validators {\n            id\n            validatorBLSKey\n            stakeAmount\n            stakedAt\n            status\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetEigenPodsNonPaginated($id: ID!) {\n    restaker(id: $id) {\n      id\n      eigenPods {\n        id\n        podOwner\n        podContractAddress\n        restaker {\n          validators {\n            id\n            validatorBLSKey\n            stakeAmount\n            stakedAt\n            status\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetVaultsByOperatorAndNetwork($operatorNetworkId: ID!) {\n    operatorNetwork(id: $operatorNetworkId) {\n      operator {\n        id\n        vaults {\n          vault {\n            id\n            vaultAddress\n            created\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetVaultsByOperatorAndNetwork($operatorNetworkId: ID!) {\n    operatorNetwork(id: $operatorNetworkId) {\n      operator {\n        id\n        vaults {\n          vault {\n            id\n            vaultAddress\n            created\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetStaker(\n    $id: ID!\n    $first: Int!\n    $skip: Int!\n    $orderBy: StakerValidator_orderBy\n    $orderDirection: OrderDirection\n  ) {\n    staker(id: $id) {\n      id\n      created\n      validators(\n        first: $first\n        skip: $skip\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n      ) {\n        id\n        validatorBLSKey\n        stakeAmount\n        stakedAt\n        status\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStaker(\n    $id: ID!\n    $first: Int!\n    $skip: Int!\n    $orderBy: StakerValidator_orderBy\n    $orderDirection: OrderDirection\n  ) {\n    staker(id: $id) {\n      id\n      created\n      validators(\n        first: $first\n        skip: $skip\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n      ) {\n        id\n        validatorBLSKey\n        stakeAmount\n        stakedAt\n        status\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetStakerNonPaginated($id: ID!) {\n    staker(id: $id) {\n      id\n      created\n      validators {\n        id\n        validatorBLSKey\n        stakeAmount\n        stakedAt\n        status\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStakerNonPaginated($id: ID!) {\n    staker(id: $id) {\n      id\n      created\n      validators {\n        id\n        validatorBLSKey\n        stakeAmount\n        stakedAt\n        status\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllSymbioticOperator(\n    $operatorId: ID!\n    $first: Int!\n    $skip: Int!\n    $orderBy: SymbioticValidator_orderBy\n    $orderDirection: OrderDirection\n  ) {\n    symbioticOperator(id: $operatorId) {\n      id\n      operatorAddress\n      created\n      validators(\n        first: $first\n        skip: $skip\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n      ) {\n        validatorBLSKey\n        created\n        vault {\n          vaultAddress\n        }\n        position\n        status\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllSymbioticOperator(\n    $operatorId: ID!\n    $first: Int!\n    $skip: Int!\n    $orderBy: SymbioticValidator_orderBy\n    $orderDirection: OrderDirection\n  ) {\n    symbioticOperator(id: $operatorId) {\n      id\n      operatorAddress\n      created\n      validators(\n        first: $first\n        skip: $skip\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n      ) {\n        validatorBLSKey\n        created\n        vault {\n          vaultAddress\n        }\n        position\n        status\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetSymbioticOperator($operatorId: ID!) {\n    symbioticOperator(id: $operatorId) {\n      id\n      operatorAddress\n      created\n      validators {\n        validatorBLSKey\n        created\n        vault {\n          vaultAddress\n        }\n        position\n        status\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetSymbioticOperator($operatorId: ID!) {\n    symbioticOperator(id: $operatorId) {\n      id\n      operatorAddress\n      created\n      validators {\n        validatorBLSKey\n        created\n        vault {\n          vaultAddress\n        }\n        position\n        status\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetMevCommitMetrics {\n      mevCommitValidators(id: \"mevCommitValidators\") {\n        totalStaked\n        totalOptedIn\n        totalRestaked\n      }\n    }\n  "): (typeof documents)["\n    query GetMevCommitMetrics {\n      mevCommitValidators(id: \"mevCommitValidators\") {\n        totalStaked\n        totalOptedIn\n        totalRestaked\n      }\n    }\n  "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;