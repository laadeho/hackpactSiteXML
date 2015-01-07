/*
Eduardo H Obieta
Hackpact 04 2015
*/
s.boot;
s.prepareForRecord;
s.record;
(
SynthDef("hp04", {|freq1 = 70, freq2 = 150, mul= 0.8, out = 0, amp = 0.7, dura = 0.1|
	var sig = Pan2.ar(SyncSaw.ar(freq1, freq2, mul),out);
	var env = EnvGen.ar(Env.perc(0.01,dura,amp,-4),1, doneAction:2);
	Out.ar(out, sig*env)
}).add
)

(
var frecuencias;
frecuencias = Routine({
	inf.do({
		60.yield;
		63.yield;
		67.yield;
		70.yield;
		72.yield;

		if (0.25.coin, {
			66.yield;
			69.yield;
			73.yield;
			76.yield;
			([63,64,65].choose).yield;
		})
	})
});
r = Routine({
	inf.do({
		Synth(
		\hp04,
		[\freq1, frecuencias.next.midicps, \pan, 1.0.rand2, \amp, exprand(0.5,0.75), \dura, [0.05,0.2,0.25].choose]
		);
		exprand(0.025,0.5).wait
	})
}).play
)
s.stopRecording;