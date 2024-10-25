export const mevCommitMiddlewareAbi = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "fallback",
    stateMutability: "payable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "UPGRADE_INTERFACE_VERSION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "acceptOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "blacklistOperators",
    inputs: [
      {
        name: "operators",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "deregisterOperators",
    inputs: [
      {
        name: "operators",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "deregisterValidators",
    inputs: [
      {
        name: "blsPubkeys",
        type: "bytes[]",
        internalType: "bytes[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "deregisterVaults",
    inputs: [
      {
        name: "vaults",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getNumSlashableVals",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPositionInValset",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "_networkRegistry",
        type: "address",
        internalType: "contract IRegistry",
      },
      {
        name: "_operatorRegistry",
        type: "address",
        internalType: "contract IRegistry",
      },
      {
        name: "_vaultFactory",
        type: "address",
        internalType: "contract IRegistry",
      },
      {
        name: "_network",
        type: "address",
        internalType: "address",
      },
      {
        name: "_slashPeriodSeconds",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_slashOracle",
        type: "address",
        internalType: "address",
      },
      {
        name: "_owner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isValidatorOptedIn",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isValidatorSlashable",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "network",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "networkRegistry",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IRegistry",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "operatorRecords",
    inputs: [
      {
        name: "operatorAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "deregRequestOccurrence",
        type: "tuple",
        internalType: "struct TimestampOccurrence.Occurrence",
        components: [
          {
            name: "exists",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "timestamp",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        name: "exists",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "isBlacklisted",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "operatorRegistry",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IRegistry",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pendingOwner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "potentialSlashableValidators",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "proxiableUUID",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pubkeyAtPositionInValset",
    inputs: [
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "registerOperators",
    inputs: [
      {
        name: "operators",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registerValidators",
    inputs: [
      {
        name: "blsPubkeys",
        type: "bytes[][]",
        internalType: "bytes[][]",
      },
      {
        name: "vaults",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "registerVaults",
    inputs: [
      {
        name: "vaults",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "slashAmounts",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "requestOperatorDeregistrations",
    inputs: [
      {
        name: "operators",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "requestValDeregistrations",
    inputs: [
      {
        name: "blsPubkeys",
        type: "bytes[]",
        internalType: "bytes[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "requestVaultDeregistrations",
    inputs: [
      {
        name: "vaults",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setNetwork",
    inputs: [
      {
        name: "_network",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setNetworkRegistry",
    inputs: [
      {
        name: "_networkRegistry",
        type: "address",
        internalType: "contract IRegistry",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setOperatorRegistry",
    inputs: [
      {
        name: "_operatorRegistry",
        type: "address",
        internalType: "contract IRegistry",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setSlashOracle",
    inputs: [
      {
        name: "slashOracle_",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setSlashPeriodSeconds",
    inputs: [
      {
        name: "slashPeriodSeconds_",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setVaultFactory",
    inputs: [
      {
        name: "_vaultFactory",
        type: "address",
        internalType: "contract IRegistry",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "slashOracle",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "slashPeriodSeconds",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "slashRecords",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
      {
        name: "blockNumber",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "exists",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "numSlashed",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "numInitSlashableRegistered",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "slashValidators",
    inputs: [
      {
        name: "blsPubkeys",
        type: "bytes[]",
        internalType: "bytes[]",
      },
      {
        name: "infractionTimestamps",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unblacklistOperators",
    inputs: [
      {
        name: "operators",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unpause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateSlashAmounts",
    inputs: [
      {
        name: "vaults",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "slashAmounts",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "upgradeToAndCall",
    inputs: [
      {
        name: "newImplementation",
        type: "address",
        internalType: "address",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "validatorRecords",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
      {
        name: "exists",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "deregRequestOccurrence",
        type: "tuple",
        internalType: "struct TimestampOccurrence.Occurrence",
        components: [
          {
            name: "exists",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "timestamp",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "valsetLength",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "vaultFactory",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IRegistry",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "vaultRecords",
    inputs: [
      {
        name: "vaultAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "exists",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "deregRequestOccurrence",
        type: "tuple",
        internalType: "struct TimestampOccurrence.Occurrence",
        components: [
          {
            name: "exists",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "timestamp",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
      {
        name: "slashAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NetworkRegistrySet",
    inputs: [
      {
        name: "networkRegistry",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NetworkSet",
    inputs: [
      {
        name: "network",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OperatorBlacklisted",
    inputs: [
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OperatorDeregistered",
    inputs: [
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OperatorDeregistrationRequested",
    inputs: [
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OperatorRegistered",
    inputs: [
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OperatorRegistrySet",
    inputs: [
      {
        name: "operatorRegistry",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OperatorUnblacklisted",
    inputs: [
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferStarted",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Paused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SlashOracleSet",
    inputs: [
      {
        name: "slashOracle",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SlashPeriodBlocksSet",
    inputs: [
      {
        name: "slashPeriodBlocks",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SlashPeriodSecondsSet",
    inputs: [
      {
        name: "slashPeriodSeconds",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Upgraded",
    inputs: [
      {
        name: "implementation",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ValRecordAdded",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "vault",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "position",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ValRecordDeleted",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "msgSender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ValidatorDeregistrationRequested",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "msgSender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "position",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ValidatorPositionsSwapped",
    inputs: [
      {
        name: "blsPubkeys",
        type: "bytes[]",
        indexed: false,
        internalType: "bytes[]",
      },
      {
        name: "vaults",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
      {
        name: "operators",
        type: "address[]",
        indexed: false,
        internalType: "address[]",
      },
      {
        name: "newPositions",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ValidatorSlashRequested",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "vault",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "slashIndex",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ValidatorSlashed",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "vault",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "slashedAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "VaultDeregistered",
    inputs: [
      {
        name: "vault",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "VaultDeregistrationRequested",
    inputs: [
      {
        name: "vault",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "VaultFactorySet",
    inputs: [
      {
        name: "vaultFactory",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "VaultRegistered",
    inputs: [
      {
        name: "vault",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "slashAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "VaultSlashAmountUpdated",
    inputs: [
      {
        name: "vault",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "slashAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AddressEmptyCode",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC1967InvalidImplementation",
    inputs: [
      {
        name: "implementation",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC1967NonPayable",
    inputs: [],
  },
  {
    type: "error",
    name: "EnforcedPause",
    inputs: [],
  },
  {
    type: "error",
    name: "ExpectedPause",
    inputs: [],
  },
  {
    type: "error",
    name: "FailedInnerCall",
    inputs: [],
  },
  {
    type: "error",
    name: "FullRestakeDelegatorNotSupported",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "InfractionTimestampMustBeNonZero",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidArrayLengths",
    inputs: [
      {
        name: "vaultLen",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "pubkeyLen",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidBLSPubKeyLength",
    inputs: [
      {
        name: "expectedLength",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "actualLength",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidFallback",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidInitialization",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidReceive",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidVaultEpochDuration",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "vaultEpochDurationSec",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "slashPeriodSec",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "MissingOperatorRecord",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "MissingValRecord",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        internalType: "bytes",
      },
    ],
  },
  {
    type: "error",
    name: "MissingValidatorRecord",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        internalType: "bytes",
      },
    ],
  },
  {
    type: "error",
    name: "MissingVaultRecord",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "NetworkNotEntity",
    inputs: [
      {
        name: "network",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "NotInitializing",
    inputs: [],
  },
  {
    type: "error",
    name: "OnlyOperator",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OnlySlashOracle",
    inputs: [
      {
        name: "slashOracle",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OperatorAlreadyBlacklisted",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OperatorAlreadyRegistered",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OperatorDeregRequestExists",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OperatorIsBlacklisted",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OperatorNotBlacklisted",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OperatorNotEntity",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OperatorNotReadyToDeregister",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
      {
        name: "currentTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "deregRequestTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "OperatorNotRegistered",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "SafeCastOverflowedUintDowncast",
    inputs: [
      {
        name: "bits",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "SlashAmountMustBeNonZero",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "SlasherNotSetForVault",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "UUPSUnauthorizedCallContext",
    inputs: [],
  },
  {
    type: "error",
    name: "UUPSUnsupportedProxiableUUID",
    inputs: [
      {
        name: "slot",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
  {
    type: "error",
    name: "UnknownDelegatorType",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "delegatorType",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "UnknownSlasherType",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "slasherType",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "ValidatorDeregRequestExists",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        internalType: "bytes",
      },
    ],
  },
  {
    type: "error",
    name: "ValidatorNotInValset",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ValidatorNotReadyToDeregister",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "currentTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "deregRequestTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "ValidatorNotRemovedFromValset",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ValidatorNotSlashable",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ValidatorRecordAlreadyExists",
    inputs: [
      {
        name: "blsPubkey",
        type: "bytes",
        internalType: "bytes",
      },
    ],
  },
  {
    type: "error",
    name: "ValidatorsNotSlashable",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
      {
        name: "numRequested",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "potentialSlashableVals",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "VaultAlreadyRegistered",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "VaultDeregNotRequested",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "VaultDeregRequestExists",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "VaultNotEntity",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "VaultNotReadyToDeregister",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
      {
        name: "currentTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "deregRequestTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "VaultNotRegistered",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "VetoSlasherMustHaveZeroResolver",
    inputs: [
      {
        name: "vault",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ZeroAddressNotAllowed",
    inputs: [],
  },
  {
    type: "error",
    name: "ZeroUintNotAllowed",
    inputs: [],
  },
] as const
