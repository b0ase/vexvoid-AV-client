#!/usr/bin/env node
/* Tempo detection tests on synthetic drum patterns (DnB, boom-bap, four-on-the-floor, kick-only) at known tempos
 * and lead-ins. Run after any change to VXEDIT.tempo: node scripts/test-tempo.js (exits 1 on a miss). */
const E=require('../vx/editor.js').VXEDIT; const sr=44100;
function hitAt(x,t,amp,kind){ const i0=Math.floor(t*sr); const L=kind==='kick'?0.12:kind==='snare'?0.15:0.03;
  for(let j=0;j<sr*L&&i0+j<x.length;j++){ const tt=j/sr; let s=0;
    if(kind==='kick') s=Math.sin(2*Math.PI*(55+70*Math.exp(-tt*30))*tt)*Math.exp(-tt*16);
    else if(kind==='snare') s=(0.6*(Math.random()*2-1)+0.4*Math.sin(2*Math.PI*190*tt))*Math.exp(-tt*22);
    else s=(Math.random()*2-1)*Math.exp(-tt*110);
    x[i0+j]+=amp*s; } }
function pattern(bpm,secs,lead,pat){ const x=new Float32Array(sr*secs), beat=60/bpm;
  for(let bar=0;;bar++){ const b0=lead+bar*4*beat; if(b0>=secs) break; for(const [pos,kind,amp] of pat){ const t=b0+pos*beat; if(t<secs) hitAt(x,t,amp,kind);} } return x; }
const eighths=[0,0.5,1,1.5,2,2.5,3,3.5].map(p=>[p,'hat',0.12]);
const P={ DnB:[[0,'kick',0.9],[2.5,'kick',0.7],[1,'snare',0.8],[3,'snare',0.8],...eighths],
  'boom-bap':[[0,'kick',0.9],[1.75,'kick',0.6],[2.5,'kick',0.7],[1,'snare',0.8],[3,'snare',0.8],...eighths],
  'four-floor':[[0,'kick',0.9],[1,'kick',0.9],[2,'kick',0.9],[3,'kick',0.9],[1,'snare',0.5],[3,'snare',0.5],...eighths.filter((e,i)=>i%2)],
  'kicks-only':[[0,'kick',0.9],[1,'kick',0.45],[2,'kick',0.45],[3,'kick',0.45],...[0.5,1.5,2.5,3.5].map(p=>[p,'hat',0.08])] };
let ok=0, all=0;
for (const [name,bpm,lead] of [['DnB',174,0.4],['DnB',170,0],['boom-bap',90,0.2],['boom-bap',85,0],['four-floor',128,0.3],['four-floor',140,0],['four-floor',95,0],['four-floor',120,1.1],['kicks-only',90,0],['kicks-only',120,0.3],['kicks-only',150,0.2],['kicks-only',137,0.7],['boom-bap',100,2],['DnB',160,0.5]]) {
  const r=E.tempo([pattern(bpm,90,lead,P[name])],sr); const good=Math.abs(r.bpm-bpm)<0.3&&(name==='kicks-only'||r.drums.snareEvery===2) /* a snare on 2 and 4 reads as a backbeat */; ok+=good; all++;
  console.log((good?'OK  ':'BAD ')+name.padEnd(10),'true',bpm,'-> ',r.bpm,'bar0',r.bar0,'(lead',lead+')');
}
console.log(ok+'/'+all); if (ok !== all) process.exit(1);
