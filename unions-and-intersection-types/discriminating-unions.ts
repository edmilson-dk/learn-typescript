/*
 Uma técnica comum para trabalhar com sindicatos é ter um único 
 campo que usa tipos literais que você pode usar para deixar o 
 TypeScript restringir o tipo atual possível. Por exemplo, vamos 
 criar uma união de três tipos que têm um único campo 
 compartilhado.
 */

type NetworkLoadingState = {
  state: "loading";
};

type NetworkFailedState = {
  state: "failed";
  code: number;
};

type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function logger(state: NetworkState): string {
  switch (state.state) {
    case "loading":
      return "Downloading...";
    case "failed":
      return `Error ${state.code} downloading`;
    case "success":
      return `Downloaded ${state.response.title} - ${state.response.summary}`;
  }
}

