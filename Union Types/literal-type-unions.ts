// You can declare a union type consisting of literal types, 
// such as string literals, number literals or boolean literals. 
// These will create union types that are more specific and have distinct states.
type Status = 'idle' | 'downloading' | 'complete';

let downloadStatus = (status: Status) => {
  if(status === 'idle'){
    console.log('Download')
  }
  else if(status === 'downloading'){
    console.log('Downloading...')
  }
  else if(status === 'complete'){
    console.log('Your download is complete!')
  }
}

downloadStatus('idle')