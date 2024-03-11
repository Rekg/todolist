let contractABI = [
  [
    {
      inputs: [
        {
          internalType: "string",
          name: "_task",
          type: "string",
        },
      ],
      name: "addTask",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_taskIndex",
          type: "uint256",
        },
      ],
      name: "deleteTask",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_taskIndex",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "_status",
          type: "bool",
        },
      ],
      name: "updateStatus",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_taskIndex",
          type: "uint256",
        },
      ],
      name: "getTask",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "task",
              type: "string",
            },
            {
              internalType: "bool",
              name: "isDone",
              type: "bool",
            },
          ],
          internalType: "struct Bloc.Task",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getTaskCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
];
let contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
