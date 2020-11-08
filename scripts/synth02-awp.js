/* Declares the synth02 Audio Worklet Processor */

class synth02_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.synth02;
    super(options);
  }
}

registerProcessor("synth02", synth02_AWP);
