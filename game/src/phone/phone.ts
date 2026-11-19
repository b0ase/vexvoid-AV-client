/**
 * Vex's PHONE: the game's hub. A beat-up burner held up in front of the view (black glass, a cracked corner, a scuffed
 * frame), upright in a tall or wide view, turned sideways in a short one. E or the dock's PHONE tile gets it out.
 * The game runs on behind it (the patrol keeps driving, the rain keeps falling): the writer just stands there with
 * his head down, so pulling it out in the wrong place is a risk, and a chase cannot be paused by checking your phone.
 *
 * Apps: CAMERA (the live view through the lens; the shutter is the Q photo), PHOTOS (the gallery, ./gallery.ts,
 * mounted inside), MESSAGES (threads from the contacts; missions arrive here, ./missions.ts), MAP (the whole
 * district from the plan, painted walls filled, you, the missions' markers), MUSIC (the soundtrack: what plays,
 * play/pause, next) and WALLET (bWalletX, coming soon: no payments, no keys, nothing sent anywhere).
 * A message that arrives shows as a small banner at the top with a buzz through the game's sound bus (a muted game
 * stays quiet). Keys while it is out: arrows pick, Enter opens, Esc goes back, 1-6 open an app from home, E puts it
 * away, Q still shoots, L the photos, M the music.
 *
 *   const ph = makePhone(host, deps); ph.open('messages', { thread: 'dez' }); ph.key('ArrowDown'); ph.tick(t, canvas)
 */
import { kc } from '../hud';
import type { Plan } from '../plan';
import type { Wall } from '../city';
import type { LawState } from '../cops';
import type { MusicState } from '../music';
import { CONTACTS, type Missions, type Msg } from './missions';
import { drawGround, drawWalls, drawLaw, drawMarker, drawYou } from './mapdraw';

export type AppId = 'home' | 'camera' | 'gallery' | 'messages' | 'map' | 'music' | 'wallet';
export const APPS: { id: Exclude<AppId, 'home'>; label: string }[] = [
  { id: 'messages', label: 'MESSAGES' }, { id: 'map', label: 'MAP' }, { id: 'camera', label: 'CAMERA' },
  { id: 'gallery', label: 'PHOTOS' }, { id: 'music', label: 'MUSIC' }, { id: 'wallet', label: 'WALLET' },
];
type Gallery = { open: (on: boolean, id?: string | null) => void; isOpen: () => boolean; key: (k: string) => boolean };
export type PhoneDeps = {
  missions: Missions;
  plan: Plan; walls: Wall[]; painted: (id: string) => boolean;
  me: () => { x: number; z: number; gy: number; heading: number };
  law: () => LawState;
  music: () => MusicState | null; musicToggle: () => void; musicNext: () => void;
  /** Take the Q photo; enter photo mode (the phone goes away). */
  shoot: () => void; photoMode: () => void;
  /** The newest photo's thumbnail (an object URL), and any photo's. */
  lastThumb: () => Promise<string | null>; photoSrc: (id: string) => Promise<string | null>;
  /** The photo objective in play that the lens frames now ('' if none, or not framed). */
  aim: () => { target: string; framed: boolean } | null;
  sound: () => { ctx: AudioContext; out: AudioNode } | null;
  /** The top-left corner used by the mini-map (the banner keeps clear of it). */
  avoid: () => number;
  focus: () => void;
  onOpen: (open: boolean) => void;
};
export type PhoneState = { open: boolean; app: AppId; thread: string | null; sel: number; unread: number; land: boolean; w: number; h: number; banner: string; apps: string[] };

const UI = '"SF Pro Text",-apple-system,system-ui,"Helvetica Neue",Arial,sans-serif', MONO = 'ui-monospace,Menlo,monospace';
const CSS = `
.vxp,.vxp-bn{text-transform:none;letter-spacing:normal}
.vxp{position:absolute;inset:0;z-index:5;display:none;align-items:center;justify-content:center;background:radial-gradient(ellipse at center,rgba(0,0,0,.28),rgba(0,0,0,.55));font-family:${UI};color:#fff;-webkit-font-smoothing:antialiased;user-select:none}
.vxp.on{display:flex}
.vxp *{box-sizing:border-box}
.vxp-ph{position:relative;background:linear-gradient(145deg,#1b1b1e,#060607 38%,#0d0d0f);box-shadow:0 30px 90px rgba(0,0,0,.75),0 0 0 1px rgba(255,255,255,.2),inset 0 0 0 1.5px rgba(255,255,255,.07),inset 0 1px 0 rgba(255,255,255,.18);animation:vxpup .22s cubic-bezier(.2,.8,.3,1)}
@keyframes vxpup{from{transform:translateY(40px) scale(.97);opacity:0}to{transform:none;opacity:1}}
.vxp-wear{position:absolute;inset:0;pointer-events:none;z-index:3}
.vxp-scr{position:absolute;overflow:hidden;background:#000}
.vxp-sb{position:absolute;left:0;right:0;top:0;height:34px;display:flex;align-items:center;justify-content:space-between;padding:0 22px;font:700 12px/1 ${UI};letter-spacing:.04em;z-index:2;pointer-events:none}
.vxp-sb .isl{position:absolute;left:50%;top:9px;width:86px;height:22px;margin-left:-43px;border-radius:12px;background:#000;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}
.vxp-sb .isl::after{content:"";position:absolute;right:10px;top:7px;width:8px;height:8px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#2a2a30,#050506)}
.vxp-sb .ic{display:flex;align-items:center;gap:6px}
.vxp-sb svg{display:block}
.vxp-app{position:absolute;left:0;right:0;top:34px;bottom:0;display:none;flex-direction:column}
.vxp-app.on{display:flex}
.vxp-hi{position:absolute;left:50%;bottom:7px;width:118px;height:5px;margin-left:-59px;border-radius:3px;background:rgba(255,255,255,.75);z-index:4;cursor:pointer}
.vxp-hi::after{content:"";position:absolute;inset:-10px -20px}
.vxp-hd{flex:none;display:flex;align-items:center;gap:8px;height:44px;padding:0 12px 0 6px;border-bottom:1px solid rgba(255,255,255,.1)}
.vxp-hd b{flex:1;font-size:13px;font-weight:800;letter-spacing:.3em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vxp-hd .r{font:600 10px/1 ${MONO};letter-spacing:.12em;color:rgba(255,255,255,.55);white-space:nowrap}
.vxp-bk{flex:none;display:flex;align-items:center;justify-content:center;width:34px;height:34px;border:0;border-radius:10px;background:none;color:#fff;font:400 26px/1 ${UI};cursor:pointer}
.vxp-bk:hover{background:rgba(255,255,255,.1)}
.vxp-body{flex:1;min-height:0;position:relative;overflow:hidden}
/* home */
.vxp-home{flex:1;display:flex;flex-direction:column;padding:18px 18px 26px;gap:16px;min-height:0}
.vxp-clk{display:flex;flex-direction:column;align-items:center;gap:6px;padding-top:8px}
.vxp-clk b{font:200 64px/1 ${UI};letter-spacing:-.02em}
.vxp-clk span{font-size:10.5px;font-weight:700;letter-spacing:.3em;color:rgba(255,255,255,.7)}
.vxp-now{display:flex;gap:11px;align-items:flex-start;padding:12px 13px;border-radius:16px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);cursor:pointer;min-height:58px}
.vxp-now:hover{background:rgba(255,255,255,.11)}
.vxp-now .t{flex:1;min-width:0;display:flex;flex-direction:column;gap:5px}
.vxp-now .t i{font-style:normal;font-size:9.5px;font-weight:800;letter-spacing:.24em;color:rgba(255,255,255,.6)}
.vxp-now .t span{font-size:12px;font-weight:700;letter-spacing:.06em;line-height:1.3}
.vxp-dia{flex:none;width:9px;height:9px;margin-top:4px;transform:rotate(45deg);background:#fff;box-shadow:0 0 0 3px rgba(255,255,255,.15)}
.vxp-grid{margin-top:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:18px 10px;justify-items:center}
.vxp-ico{position:relative;display:flex;flex-direction:column;align-items:center;gap:7px;cursor:pointer;width:76px}
.vxp-ico .sq{width:62px;height:62px;border-radius:17px;display:flex;align-items:center;justify-content:center;background:linear-gradient(160deg,#1c1c1f,#0b0b0d);border:1px solid rgba(255,255,255,.16);box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 8px 18px rgba(0,0,0,.5);transition:transform .12s ease,background .12s ease}
.vxp-ico[data-a=wallet] .sq{background:linear-gradient(160deg,#f2f2f2,#bdbdc2);color:#0a0a0b;border-color:#fff}
.vxp-ico .sq svg{width:30px;height:30px}
.vxp-ico span{font-size:9.5px;font-weight:700;letter-spacing:.16em;white-space:nowrap}
.vxp-ico:hover .sq{transform:translateY(-2px);background:linear-gradient(160deg,#26262a,#111114)}
.vxp-ico[data-a=wallet]:hover .sq{background:linear-gradient(160deg,#fff,#d0d0d4)}
.vxp-ico.sel .sq{box-shadow:0 0 0 2px #fff,0 8px 18px rgba(0,0,0,.5)}
.vxp-bd{position:absolute;top:-5px;right:2px;min-width:20px;height:20px;padding:0 6px;border-radius:10px;background:#fff;color:#000;font:800 11px/20px ${UI};text-align:center;box-shadow:0 0 0 2px #000}
.vxp-k{position:absolute;bottom:-1px;left:50%;transform:translateX(-50%);display:none}
/* messages */
.vxp-msgs{flex:1;min-height:0;display:flex}
.vxp-list{flex:1;min-width:0;overflow-y:auto}
.vxp-list::-webkit-scrollbar,.vxp-bub::-webkit-scrollbar{width:4px}.vxp-list::-webkit-scrollbar-thumb,.vxp-bub::-webkit-scrollbar-thumb{background:rgba(255,255,255,.25);border-radius:2px}
.vxp-row{display:flex;gap:11px;align-items:center;padding:12px 14px;border-bottom:1px solid rgba(255,255,255,.07);cursor:pointer}
.vxp-row:hover{background:rgba(255,255,255,.06)}
.vxp-row.sel{background:rgba(255,255,255,.1);box-shadow:inset 3px 0 0 #fff}
.vxp-av{flex:none;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#141416;border:1px solid rgba(255,255,255,.28);font:800 15px/1 ${UI};letter-spacing:0}
.vxp-row .m{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}
.vxp-row .m b{font-size:12px;font-weight:800;letter-spacing:.14em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vxp-row .m span{font-size:12px;color:rgba(255,255,255,.6);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vxp-row .m span.u{color:#fff;font-weight:600}
.vxp-row .s{flex:none;display:flex;flex-direction:column;align-items:flex-end;gap:6px;font:600 10px/1 ${MONO};color:rgba(255,255,255,.5)}
.vxp-row .s i{width:9px;height:9px;border-radius:50%;background:#fff}
.vxp-th{flex:1;min-width:0;display:none;flex-direction:column}
.vxp-msgs.th .vxp-th{display:flex}
.vxp-msgs.th .vxp-list{display:none}
.vxp-bub{flex:1;min-height:0;overflow-y:auto;padding:12px 12px 8px;display:flex;flex-direction:column;gap:5px}
.vxp-who{display:flex;flex-direction:column;align-items:center;gap:6px;padding:4px 0 12px;font-size:10px;font-weight:700;letter-spacing:.2em;color:rgba(255,255,255,.55);text-align:center}
.vxp-who .vxp-av{width:52px;height:52px;font-size:19px}
.vxp-ts{align-self:center;margin:8px 0 4px;font:600 9.5px/1 ${MONO};letter-spacing:.14em;color:rgba(255,255,255,.4)}
.vxp-b{max-width:80%;padding:8px 12px;border-radius:17px;font-size:13px;line-height:1.35;word-wrap:break-word;animation:vxpin .2s ease}
@keyframes vxpin{from{opacity:0;transform:translateY(4px)}}
.vxp-b.th{align-self:flex-start;background:#1d1d20;border:1px solid rgba(255,255,255,.08);border-bottom-left-radius:6px}
.vxp-b.me{align-self:flex-end;background:#f1f1f1;color:#0a0a0b;border-bottom-right-radius:6px}
.vxp-b.ph{padding:3px;background:#f1f1f1;width:62%;max-width:240px}
.vxp-b.ph img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:14px 14px 4px 14px;background:#222}
.vxp-card{flex:none;margin:6px 10px 30px;padding:10px 12px;border-radius:14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);display:flex;flex-direction:column;gap:6px}
.vxp-card:empty{display:none}
.vxp-card .ln{display:flex;align-items:center;gap:9px;font-size:11px;font-weight:700;letter-spacing:.08em;line-height:1.3}
.vxp-card .ln.done{opacity:.45}
.vxp-card .ln i{font-style:normal;font-size:9px;font-weight:800;letter-spacing:.22em;color:rgba(255,255,255,.6)}
.vxp-btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;height:32px;padding:0 13px;border-radius:10px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.05);color:#fff;font:700 10px/1 ${UI};letter-spacing:.2em;cursor:pointer;white-space:nowrap}
.vxp-btn:hover{background:#fff;color:#0a0a0b}
.vxp-btn:hover .vxh-kc{border-color:rgba(0,0,0,.55);color:#0a0a0b}
.vxp-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:24px;text-align:center;font-size:10.5px;font-weight:700;letter-spacing:.22em;color:rgba(255,255,255,.5)}
/* map */
.vxp-map{flex:1;min-height:0;position:relative;background:#030304;touch-action:none;cursor:grab}
.vxp-map canvas{position:absolute;inset:0;width:100%;height:100%}
.vxp-mapc{position:absolute;right:10px;top:10px;display:flex;flex-direction:column;gap:6px}
.vxp-mapc button{width:34px;height:34px;border-radius:10px;border:1px solid rgba(255,255,255,.28);background:rgba(8,8,10,.75);color:#fff;font:600 18px/1 ${UI};cursor:pointer;display:flex;align-items:center;justify-content:center}
.vxp-mapc button:hover{background:#fff;color:#000}
.vxp-leg{position:absolute;left:10px;top:10px;display:flex;flex-direction:column;gap:5px;padding:7px 9px;border-radius:9px;background:rgba(8,8,10,.72);border:1px solid rgba(255,255,255,.14);font-size:8.5px;font-weight:700;letter-spacing:.16em;pointer-events:none}
.vxp-leg span{display:flex;align-items:center;gap:7px}
.vxp-leg i{display:inline-block}
.vxp-objs{flex:none;max-height:38%;overflow-y:auto;border-top:1px solid rgba(255,255,255,.12);padding:6px 0 28px}
.vxp-objs:empty{display:none}
.vxp-obj{display:flex;align-items:center;gap:10px;padding:8px 14px;cursor:pointer;font-size:11px;font-weight:700;letter-spacing:.07em;line-height:1.3}
.vxp-obj:hover,.vxp-obj.sel{background:rgba(255,255,255,.08)}
.vxp-obj .m{flex:1;min-width:0}
.vxp-obj .m i{display:block;font-style:normal;font-size:9px;font-weight:800;letter-spacing:.22em;color:rgba(255,255,255,.55);margin-bottom:2px}
.vxp-obj .d{flex:none;font:600 10px/1 ${MONO};color:rgba(255,255,255,.6)}
/* music */
.vxp-mus{flex:1;min-height:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:16px 22px 34px}
.vxp-art{width:min(100%,250px);aspect-ratio:1;border-radius:12px;background:radial-gradient(circle at 30% 25%,#26262a,#050506 70%);border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;box-shadow:0 18px 40px rgba(0,0,0,.6)}
.vxp-art b{font:900 30px/1 ${UI};letter-spacing:.06em;color:transparent;-webkit-text-stroke:1.3px #fff}
.vxp-art .eq{position:absolute;left:14px;right:14px;bottom:14px;height:36px;display:flex;align-items:flex-end;gap:3px}
.vxp-art .eq i{flex:1;background:rgba(255,255,255,.75);border-radius:1px;height:20%;transition:height .25s ease}
.vxp-mt{display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;max-width:100%}
.vxp-mt b{font-size:16px;font-weight:800;letter-spacing:.04em;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vxp-mt span{font-size:10px;font-weight:700;letter-spacing:.28em;color:rgba(255,255,255,.6)}
.vxp-ctl{display:flex;align-items:center;gap:22px}
.vxp-ctl button{display:flex;align-items:center;justify-content:center;border-radius:50%;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.04);color:#fff;cursor:pointer}
.vxp-ctl button:hover{background:#fff;color:#000}
.vxp-ctl .pp{width:64px;height:64px;background:#f1f1f1;color:#000;border-color:#fff}
.vxp-ctl .pp:hover{background:#fff}
.vxp-ctl .nx{width:46px;height:46px}
.vxp-ft{font-size:9px;font-weight:700;letter-spacing:.18em;color:rgba(255,255,255,.5);display:flex;gap:12px;align-items:center;flex-wrap:wrap;justify-content:center}
.vxp-ft .vxh-kc{margin-right:4px}
/* camera */
.vxp-mr{display:flex;flex-direction:column;align-items:center;gap:16px;min-width:0;max-width:100%}
.vxp-wal .wt{display:flex;flex-direction:column;gap:10px;align-items:center}
.vxp-ph.land .vxp-wal .wt{align-items:flex-start}
.vxp-cbk{position:absolute;left:8px;top:8px;z-index:2;background:rgba(0,0,0,.45)!important;border:1px solid rgba(255,255,255,.22)!important}
.vxp-cam{flex:1;min-height:0;position:relative;background:#000}
.vxp-cam canvas{position:absolute;inset:0;width:100%;height:100%}
.vxp-vf{position:absolute;pointer-events:none}
.vxp-vf i{position:absolute;width:22px;height:22px;border:0 solid rgba(255,255,255,.85)}
.vxp-vf .a{left:0;top:0;border-left-width:2px;border-top-width:2px}.vxp-vf .b{right:0;top:0;border-right-width:2px;border-top-width:2px}
.vxp-vf .c{left:0;bottom:0;border-left-width:2px;border-bottom-width:2px}.vxp-vf .d{right:0;bottom:0;border-right-width:2px;border-bottom-width:2px}
.vxp-vf.ok i{border-color:#fff;width:30px;height:30px}
.vxp-g3{position:absolute;pointer-events:none;background:linear-gradient(90deg,transparent calc(33.3% - .5px),rgba(255,255,255,.18) 0,rgba(255,255,255,.18) calc(33.3% + .5px),transparent 0,transparent calc(66.6% - .5px),rgba(255,255,255,.18) 0,rgba(255,255,255,.18) calc(66.6% + .5px),transparent 0),linear-gradient(0deg,transparent calc(33.3% - .5px),rgba(255,255,255,.18) 0,rgba(255,255,255,.18) calc(33.3% + .5px),transparent 0,transparent calc(66.6% - .5px),rgba(255,255,255,.18) 0,rgba(255,255,255,.18) calc(66.6% + .5px),transparent 0)}
.vxp-aim{position:absolute;left:50%;top:52px;transform:translateX(-50%);padding:5px 10px;border-radius:8px;background:rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.25);font-size:9px;font-weight:800;letter-spacing:.2em;white-space:nowrap;display:none;max-width:calc(100% - 24px);overflow:hidden;text-overflow:ellipsis}
.vxp-aim.ok{background:#fff;color:#000}
.vxp-cb{position:absolute;left:0;right:0;bottom:0;height:96px;padding-bottom:16px;display:flex;align-items:center;justify-content:space-between;padding-left:22px;padding-right:22px;background:linear-gradient(0deg,rgba(0,0,0,.85),rgba(0,0,0,.55))}
.vxp-th0{width:46px;height:46px;border-radius:9px;border:1px solid rgba(255,255,255,.35);background:#111 center/cover no-repeat;cursor:pointer}
.vxp-sh{width:66px;height:66px;border-radius:50%;border:3px solid #fff;background:none;padding:4px;cursor:pointer}
.vxp-sh::after{content:"";display:block;width:100%;height:100%;border-radius:50%;background:#fff;transition:transform .1s ease}
.vxp-sh:active::after{transform:scale(.9)}
.vxp-pm{font:700 9px/1.2 ${UI};letter-spacing:.18em;padding:8px 9px;border-radius:9px;border:1px solid rgba(255,255,255,.3);background:rgba(0,0,0,.4);color:#fff;cursor:pointer;text-align:center}
.vxp-pm:hover{background:#fff;color:#000}
/* wallet */
.vxp-wal{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:24px 26px 40px;text-align:center}
.vxp-wal .card{width:min(100%,260px);aspect-ratio:1.586;border-radius:16px;background:linear-gradient(140deg,#f4f4f4,#a9a9ae);color:#0a0a0b;display:flex;flex-direction:column;justify-content:space-between;padding:16px 18px;text-align:left;box-shadow:0 18px 40px rgba(0,0,0,.6)}
.vxp-wal .card b{font:800 20px/1 ${UI};letter-spacing:-.01em}
.vxp-wal .card span{font:700 9px/1 ${UI};letter-spacing:.3em;opacity:.7}
.vxp-wal h3{margin:6px 0 0;font-size:12px;font-weight:800;letter-spacing:.34em}
.vxp-wal p{margin:0;font-size:11.5px;line-height:1.5;color:rgba(255,255,255,.62);max-width:250px}
/* the gallery fills the phone's screen */
.vxp .vxg{background:none;z-index:1}
.vxp .vxg-p{left:0!important;top:0!important;transform:none!important;width:100%!important;height:100%!important;border:0!important;border-radius:0!important;background:#000!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
.vxp .vxg-p>.vxg-grid{padding-bottom:28px!important}
.vxp .vxg-v .vxg-acts{padding-bottom:22px}
/* sideways (a short view) */
.vxp-ph.land .vxp-sb{height:24px;padding:0 18px 0 22px;font-size:11px}
.vxp-ph.land .vxp-sb .isl{display:none}
.vxp-ph.land .vxp-app{top:24px}
.vxp-ph.land .vxp-hi{bottom:5px;width:96px;margin-left:-48px;height:4px}
.vxp-ph.land .vxp-hd{height:36px}
.vxp-ph.land .vxp-who{display:none}
.vxp-ph.land .vxp-card{margin:4px 8px 14px;padding:7px 10px;gap:4px}
.vxp-ph.land .vxp-cam{margin-top:-24px}
.vxp-ph.land .vxp-home{flex-direction:row;align-items:stretch;padding:16px 20px 16px 22px;gap:18px}
.vxp-ph.land .vxp-hl{flex:0 0 38%;display:flex;flex-direction:column;justify-content:center;gap:14px;min-width:0}
.vxp-ph.land .vxp-clk{align-items:flex-start;padding:0}
.vxp-ph.land .vxp-clk b{font-size:52px}
.vxp-ph.land .vxp-grid{margin:auto 0;flex:1;grid-template-columns:repeat(3,1fr);gap:12px 6px}
.vxp-ph.land .vxp-ico .sq{width:52px;height:52px;border-radius:14px}
.vxp-ph.land .vxp-ico .sq svg{width:26px;height:26px}
.vxp-ph.land .vxp-msgs .vxp-list{flex:0 0 42%;border-right:1px solid rgba(255,255,255,.1);display:block!important}
.vxp-ph.land .vxp-msgs .vxp-th{display:flex}
.vxp-ph.land .vxp-msgs .vxp-th .vxp-hd .vxp-bk{display:none}
.vxp-ph.land .vxp-card{margin-bottom:10px}
.vxp-ph.land .vxp-objs{position:absolute;right:54px;bottom:10px;max-width:48%;max-height:60%;padding:4px 0;border:1px solid rgba(255,255,255,.14);border-radius:10px;background:rgba(8,8,10,.8)}
.vxp-ph.land .vxp-mapw{flex-direction:row}
.vxp-ph.land .vxp-mus{flex-direction:row;gap:26px;padding:16px 30px}
.vxp-ph.land .vxp-art{width:auto;height:min(100%,230px)}
.vxp-ph.land .vxp-mr{display:flex;flex-direction:column;align-items:center;gap:16px;min-width:0;flex:1}
.vxp-ph.land .vxp-aim{top:14px}
.vxp-ph.land.short .vxp-ft{display:none}
.vxp-ph.land .vxp-mus{padding:10px 26px 16px}
.vxp-ph.land .vxp-cb{left:auto;top:0;width:96px;height:auto;flex-direction:column;padding:16px 0;background:linear-gradient(270deg,rgba(0,0,0,.85),rgba(0,0,0,.55))}
.vxp-ph.land .vxp-wal{flex-direction:row;gap:26px;text-align:left}
.vxp-ph.land .vxp-wal .wt{display:flex;flex-direction:column;gap:10px}
.vxp-ph.land .vxg-p>.vxg-grid{padding-bottom:12px!important}
/* the banner: a message arrived */
.vxp-bn{position:absolute;top:14px;z-index:7;display:flex;align-items:center;gap:10px;padding:9px 12px 9px 9px;border-radius:16px;background:rgba(14,14,16,.88);border:1px solid rgba(255,255,255,.2);box-shadow:0 14px 40px rgba(0,0,0,.6);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);color:#fff;font-family:${UI};-webkit-font-smoothing:antialiased;cursor:pointer;opacity:0;transform:translateY(-12px);transition:opacity .25s ease,transform .25s cubic-bezier(.2,.8,.3,1);pointer-events:none}
.vxp-bn.on{opacity:1;transform:none;pointer-events:auto}
.vxp-bn .vxp-av{width:34px;height:34px;font-size:13px}
.vxp-bn .t{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}
.vxp-bn .t b{font-size:10.5px;font-weight:800;letter-spacing:.2em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vxp-bn .t span{font-size:12px;line-height:1.3;color:rgba(255,255,255,.85);overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
`;
const I = {
  messages: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M5 7.5 H27 V22 H14 L8 27 V22 H5 Z"/><path d="M10 13 H22 M10 17 H18" stroke-width="1.3" opacity=".7"/></svg>',
  map: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M4 8 L11 5.5 L21 8.5 L28 6 V24 L21 26.5 L11 23.5 L4 26 Z"/><path d="M11 5.5 V23.5 M21 8.5 V26.5" stroke-width="1.2" opacity=".7"/><path d="M15 14 L17 16 L15 18 L13 16 Z" fill="currentColor" stroke="none"/></svg>',
  camera: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M4 10.5 H10 L12.5 7 H19.5 L22 10.5 H28 V25 H4 Z"/><circle cx="16" cy="17.5" r="4.6"/><circle cx="16" cy="17.5" r="1.8" stroke-width="1.1" opacity=".6"/></svg>',
  gallery: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="5" y="6" width="22" height="20" rx="2.5"/><path d="M5 21 L12 14.5 L17 19 L21 15.5 L27 21" stroke-width="1.4"/><circle cx="20.5" cy="11" r="1.8" fill="currentColor" stroke="none"/></svg>',
  music: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="16" cy="16" r="11"/><circle cx="16" cy="16" r="3.2"/><circle cx="16" cy="16" r="7" stroke-width="1" opacity=".45"/></svg>',
  wallet: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><rect x="4.5" y="8" width="23" height="17" rx="3"/><path d="M4.5 12.5 H27.5" stroke-width="1.3"/><rect x="18" y="15.5" width="9.5" height="5" rx="2.5" fill="currentColor" stroke="none"/></svg>',
};
const play = '<svg width="22" height="22" viewBox="0 0 22 22"><path d="M7 4.5 L18 11 L7 17.5 Z" fill="currentColor"/></svg>';
const pause = '<svg width="22" height="22" viewBox="0 0 22 22"><rect x="5.5" y="4.5" width="4" height="13" rx="1" fill="currentColor"/><rect x="12.5" y="4.5" width="4" height="13" rx="1" fill="currentColor"/></svg>';
const next = '<svg width="20" height="20" viewBox="0 0 20 20"><path d="M4 4 L12 10 L4 16 Z M13 4 H16 V16 H13 Z" fill="currentColor"/></svg>';
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const p2 = (n: number) => String(n).padStart(2, '0');
const hm = (t: number) => { const d = new Date(t); return `${p2(d.getHours())}:${p2(d.getMinutes())}`; };
const DAYS = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'], MONS = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
const dist = (m: number) => (m < 1000 ? `${Math.round(m)} M` : `${(m / 1000).toFixed(1)} KM`);

/** The buzz of a message arriving: two muffled pulses through the game's sound bus (a muted game stays quiet). */
export function buzz(bus: { ctx: AudioContext; out: AudioNode } | null) {
  if (!bus) return;
  try {
    const ctx = bus.ctx, at = ctx.currentTime + 0.01;
    for (const dt of [0, 0.22]) {
      const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = 118;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 360; lp.Q.value = 0.7;
      const g = ctx.createGain(); g.gain.value = 0;
      g.gain.setValueAtTime(0, at + dt); g.gain.linearRampToValueAtTime(0.09, at + dt + 0.02); g.gain.setValueAtTime(0.09, at + dt + 0.13); g.gain.linearRampToValueAtTime(0, at + dt + 0.16);
      o.connect(lp).connect(g).connect(bus.out); o.start(at + dt); o.stop(at + dt + 0.18); o.onended = () => { try { g.disconnect(); } catch { /* gone */ } };
    }
  } catch { /* no sound here: the banner still shows */ }
}

export function makePhone(host: HTMLElement, d: PhoneDeps) {
  if (!document.getElementById('vxp-css')) { const s = document.createElement('style'); s.id = 'vxp-css'; s.textContent = CSS; document.head.appendChild(s); }
  const root = document.createElement('div'); root.className = 'vxp'; root.dataset.vxHud = 'phone';
  const ph = document.createElement('div'); ph.className = 'vxp-ph'; ph.dataset.vxPhone = 'body';
  const scr = document.createElement('div'); scr.className = 'vxp-scr';
  const wear = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); wear.setAttribute('class', 'vxp-wear');
  scr.innerHTML = `<div class="vxp-sb"><span class="tm">00:00</span><span class="isl"></span><span class="ic"><svg width="17" height="11" viewBox="0 0 17 11" fill="#fff"><rect x="0" y="7" width="3" height="4" rx=".8"/><rect x="4.5" y="5" width="3" height="6" rx=".8"/><rect x="9" y="2.5" width="3" height="8.5" rx=".8"/><rect x="13.5" y="0" width="3" height="11" rx=".8" opacity=".3"/></svg><span style="font-size:10px;letter-spacing:.06em">4G</span><svg width="25" height="12" viewBox="0 0 25 12"><rect x=".6" y=".6" width="21" height="10.8" rx="3" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="1.2"/><rect x="2.4" y="2.4" width="4.4" height="7.2" rx="1.4" fill="#fff"/><rect x="22.6" y="3.8" width="1.8" height="4.4" rx=".9" fill="#fff" fill-opacity=".5"/></svg></span></div>`;
  const apps: Record<AppId, HTMLDivElement> = {} as Record<AppId, HTMLDivElement>;
  for (const id of ['home', ...APPS.map((a) => a.id)] as AppId[]) { const a = document.createElement('div'); a.className = 'vxp-app'; a.dataset.app = id; scr.appendChild(a); apps[id] = a; }
  const hi = document.createElement('div'); hi.className = 'vxp-hi'; hi.dataset.a = 'home'; hi.title = 'Home (Esc)'; scr.appendChild(hi);
  ph.append(scr, wear); root.appendChild(ph); host.appendChild(root);
  const banner = document.createElement('div'); banner.className = 'vxp-bn'; banner.dataset.vxHud = 'banner'; host.appendChild(banner);
  const header = (title: string, right = '') => `<div class="vxp-hd"><button class="vxp-bk" data-a="back" title="Back (Esc)">‹</button><b>${title}</b><span class="r">${right}</span></div>`;

  // ---- home ----
  apps.home.innerHTML = `<div class="vxp-home"><div class="vxp-hl"><div class="vxp-clk"><b></b><span></span></div><div class="vxp-now" data-a="now"><span class="vxp-dia"></span><div class="t"><i></i><span></span></div></div></div><div class="vxp-grid">${APPS.map((a, i) => `<div class="vxp-ico" data-a="${a.id}" data-i="${i}" title="${a.label} (${i + 1})"><div class="sq">${I[a.id]}</div><span>${a.label}</span></div>`).join('')}</div></div>`;
  // ---- messages ----
  apps.messages.innerHTML = `${header('MESSAGES')}<div class="vxp-msgs"><div class="vxp-list"></div><div class="vxp-th">${header('')}<div class="vxp-bub"></div><div class="vxp-card"></div></div></div>`;
  // ---- map ----
  apps.map.innerHTML = `${header('MAP', 'THE DISTRICT')}<div class="vxp-map"><canvas></canvas><div class="vxp-leg"><span><i style="width:8px;height:8px;transform:rotate(45deg);background:#fff"></i>MISSION</span><span><i style="width:12px;height:3px;background:#fff"></i>PAINTED</span><span><i style="width:2px;height:8px;background:rgba(255,255,255,.6);margin:0 5px"></i>PAINTABLE</span></div><div class="vxp-mapc"><button data-a="zin" title="Zoom in (+)">+</button><button data-a="zout" title="Zoom out (-)">−</button><button data-a="me" title="Centre on you (C)" style="font-size:13px">◎</button></div></div><div class="vxp-objs"></div>`;
  // ---- music ----
  apps.music.innerHTML = `${header('MUSIC', 'VEXVOID')}<div class="vxp-mus"><div class="vxp-art"><b>VEXVOID</b><div class="eq">${'<i></i>'.repeat(18)}</div></div><div class="vxp-mr"><div class="vxp-mt"><b></b><span></span></div><div class="vxp-ctl"><button class="pp" data-a="pp" title="Play / pause (Space)"></button><button class="nx" data-a="next" title="Next (→)">${next}</button></div><div class="vxp-ft"><span>${kc('SPACE')}PLAY / PAUSE</span><span>${kc('→')}NEXT</span><span>${kc('M')}ANYWHERE</span></div></div></div>`;
  // ---- camera ----
  apps.camera.innerHTML = `<div class="vxp-cam"><canvas></canvas><button class="vxp-bk vxp-cbk" data-a="back" title="Back (Esc)">‹</button><div class="vxp-g3"></div><div class="vxp-vf"><i class="a"></i><i class="b"></i><i class="c"></i><i class="d"></i></div><div class="vxp-aim"></div><div class="vxp-cb"><div class="vxp-th0" data-a="photos" title="Your photos (L)"></div><button class="vxp-sh" data-a="shoot" title="Take the photo (Q, Space)"></button><button class="vxp-pm" data-a="pmode" title="Photo mode: time stops, frame it (O)">PHOTO<br>MODE</button></div></div>`;
  // ---- wallet ----
  apps.wallet.innerHTML = `${header('WALLET')}<div class="vxp-wal"><div class="card"><span>BWALLETX</span><b>bWalletX</b><span>COMING SOON</span></div><div class="wt"><h3>COMING SOON</h3><p>Paint, caps and gear from the shops, priced in dollars, paid from your bWalletX.</p><p style="font-size:10px;letter-spacing:.14em;color:rgba(255,255,255,.4)">NOTHING HERE TAKES MONEY YET</p></div></div>`;

  // nothing on the phone reaches the game underneath; a click on the dark round it puts it away
  for (const ev of ['pointerdown', 'wheel', 'contextmenu', 'dblclick'] as const) root.addEventListener(ev, (e) => { e.stopPropagation(); if (ev === 'contextmenu') e.preventDefault(); }, { passive: ev !== 'contextmenu' });
  banner.addEventListener('pointerdown', (e) => e.stopPropagation());

  let isOpen = false, app: AppId = 'home', direct = false, sel = 0, thread: string | null = null, rowSel = 0, objSel = 0, land = false, PW = 0, PH = 0, bannerFor = '', bannerT = 0, vw = 1440, vh = 900;
  let gallery: Gallery | null = null;
  // ---- the layout: upright in a tall view, sideways in a short one, always inside the view ----
  const layout = (w: number, h: number) => {
    vw = w; vh = h;
    land = h < 560 && w > h * 1.15;
    if (land) { PH = Math.max(240, h - 20); PW = Math.min(w - 24, Math.round(PH * 2.06)); }
    else { PH = Math.min(h - 32, 820); PW = Math.round(PH * 0.485); if (PW > w - 24) { PW = w - 24; PH = Math.min(h - 32, Math.round(PW / 0.485)); } }
    const R = Math.min(54, Math.round(Math.min(PW, PH) * 0.13)), bz = Math.max(7, Math.round(Math.min(PW, PH) * 0.024));
    ph.className = 'vxp-ph ' + (land ? 'land' : 'port') + (PH < 330 ? ' short' : '');
    ph.style.width = PW + 'px'; ph.style.height = PH + 'px'; ph.style.borderRadius = R + 'px';
    scr.style.inset = bz + 'px'; scr.style.borderRadius = (R - bz) + 'px';
    // the wear: a crack from the top corner, a chip in the frame, scuffs; faint, never over what you read
    const W = PW, H = PH;
    wear.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const cx = land ? W - bz - 40 : W - bz - 18, cy = land ? H - bz - 22 : bz + 64;
    const ray = (a: number, l: number, kink: number) => { const x1 = cx + Math.cos(a) * l * 0.45, y1 = cy + Math.sin(a) * l * 0.45, x2 = cx + Math.cos(a + kink) * l, y2 = cy + Math.sin(a + kink) * l; return `M${cx.toFixed(1)} ${cy.toFixed(1)} L${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`; };
    const base = land ? -Math.PI * 0.75 : Math.PI * 0.75;
    wear.innerHTML = `<g fill="none" stroke="#fff" stroke-linecap="round"><path d="${[ray(base - 0.5, 70, 0.15), ray(base - 0.05, 120, -0.12), ray(base + 0.42, 58, 0.2), ray(base + 0.9, 34, -0.1), ray(base - 1.0, 40, 0.08)].join(' ')}" stroke-opacity=".2" stroke-width=".8"/><circle cx="${cx}" cy="${cy}" r="3.2" stroke-opacity=".28" stroke-width=".8"/><path d="M${cx - 9} ${cy + 3} Q${cx - 4} ${cy - 6} ${cx + 5} ${cy - 7}" stroke-opacity=".14" stroke-width=".6"/></g><g fill="none" stroke="#fff" stroke-linecap="round" stroke-opacity=".22"><path d="M${R * 0.7} ${H - 2.5} L${R * 0.7 + 18} ${H - 2.2}" stroke-width="1.4"/><path d="M2.2 ${H * 0.62} L2.6 ${H * 0.62 + 11}" stroke-width="1.1"/><path d="M${W - 2.4} ${H * 0.3} L${W - 2.2} ${H * 0.3 + 7}" stroke-width="1"/></g>`;
    gridCols = land ? 3 : 3;
    if (isOpen) refresh();
  };
  let gridCols = 3;
  // ---- the home screen ----
  const renderHome = () => {
    const now = new Date();
    (apps.home.querySelector('.vxp-clk b') as HTMLElement).textContent = `${p2(now.getHours())}:${p2(now.getMinutes())}`;
    (apps.home.querySelector('.vxp-clk span') as HTMLElement).textContent = `${DAYS[now.getDay()]} ${now.getDate()} ${MONS[now.getMonth()]}`;
    const cur = d.missions.current(), nowEl = apps.home.querySelector('.vxp-now') as HTMLElement, me = d.me();
    const mk = cur && cur.marker;
    (nowEl.querySelector('i') as HTMLElement).textContent = cur ? `${CONTACTS[d.missions.mission(cur.mission)?.from || '']?.name || ''} · ${cur.title}` : 'ALL QUIET';
    (nowEl.querySelector('.t span') as HTMLElement).textContent = cur ? `${cur.text}${mk ? ' · ' + dist(Math.hypot(mk.x - me.x, mk.z - me.z)) : ''}` : 'No jobs on. Keep painting; someone will message.';
    (nowEl.querySelector('.vxp-dia') as HTMLElement).style.opacity = cur ? '1' : '.25';
    apps.home.querySelectorAll('.vxp-ico').forEach((e, i) => {
      e.classList.toggle('sel', i === sel);
      const id = (e as HTMLElement).dataset.a!, n = id === 'messages' ? d.missions.unread() : 0;
      let b = e.querySelector('.vxp-bd') as HTMLElement | null;
      if (n && !b) { b = document.createElement('div'); b.className = 'vxp-bd'; e.appendChild(b); }
      if (b) { b.textContent = String(n); b.style.display = n ? '' : 'none'; }
    });
  };
  // ---- messages ----
  const avatar = (id: string) => `<div class="vxp-av">${esc(CONTACTS[id]?.mark || id[0].toUpperCase())}</div>`;
  const renderList = () => {
    const ts = d.missions.threads(), list = apps.messages.querySelector('.vxp-list') as HTMLElement;
    if (!ts.length) { list.innerHTML = `<div class="vxp-empty" style="height:100%"><div style="opacity:.6">${I.messages}</div>NO MESSAGES YET</div>`; return; }
    rowSel = Math.max(0, Math.min(ts.length - 1, rowSel));
    list.innerHTML = ts.map((t, i) => { const last = t.last, prev = last.photo ? (last.from === 'me' ? 'You sent a photo' : 'Photo') : (last.from === 'me' ? 'You: ' : '') + (last.text || '');
      return `<div class="vxp-row${i === rowSel ? ' sel' : ''}${thread === t.id ? ' on' : ''}" data-th="${t.id}">${avatar(t.id)}<div class="m"><b>${esc(t.name)}</b><span class="${t.unread ? 'u' : ''}">${esc(prev)}</span></div><div class="s">${hm(last.t)}${t.unread ? '<i></i>' : ''}</div></div>`; }).join('');
  };
  const photoImgs = new Map<string, string>();
  const renderThread = () => {
    const box = apps.messages.querySelector('.vxp-msgs') as HTMLElement, th = apps.messages.querySelector('.vxp-th') as HTMLElement;
    const ts = d.missions.threads();
    if (land && !thread && ts.length) thread = ts[Math.min(rowSel, ts.length - 1)].id;
    box.classList.toggle('th', !!thread);
    (apps.messages.querySelector(':scope > .vxp-hd') as HTMLElement).style.display = thread && !land ? 'none' : '';
    if (!thread) return;
    const t = ts.find((x) => x.id === thread);
    (th.querySelector('.vxp-hd b') as HTMLElement).textContent = CONTACTS[thread]?.name || thread.toUpperCase();
    const bub = th.querySelector('.vxp-bub') as HTMLElement, atEnd = bub.scrollHeight - bub.scrollTop - bub.clientHeight < 40;
    const parts: string[] = [`<div class="vxp-who">${avatar(thread)}<span>${esc(CONTACTS[thread]?.about || '')}</span></div>`];
    let lastT = 0;
    for (const m of t ? t.msgs : []) {
      if (m.t - lastT > 5 * 60e3) parts.push(`<div class="vxp-ts">${hm(m.t)}</div>`); lastT = m.t;
      if (m.photo) parts.push(`<div class="vxp-b ph me"><img data-ph="${esc(m.photo)}" alt=""></div>`);
      else parts.push(`<div class="vxp-b ${m.from === 'me' ? 'me' : 'th'}">${esc(m.text || '')}</div>`);
    }
    bub.innerHTML = parts.join('');
    bub.querySelectorAll('img[data-ph]').forEach((im) => { const id = (im as HTMLImageElement).dataset.ph!, u = photoImgs.get(id); if (u) (im as HTMLImageElement).src = u; else void d.photoSrc(id).then((s) => { if (s) { photoImgs.set(id, s); (im as HTMLImageElement).src = s; } }); });
    if (atEnd || bub.dataset.for !== thread) bub.scrollTop = bub.scrollHeight;
    bub.dataset.for = thread;
    // the jobs this contact gave: what is in play, with the way to it on the map
    const me = d.me(), ms = d.missions.list().filter((m) => m.from === thread && m.status !== 'locked' && m.status !== 'waiting');
    const marks = d.missions.markers();
    (th.querySelector('.vxp-card') as HTMLElement).innerHTML = ms.map((m) => {
      if (m.status === 'done') return `<div class="ln done"><span style="font-size:13px">✓</span><span><i>${esc(m.title)}</i> · DONE</span></div>`;
      const o = m.objectives.find((x) => x.current), mk = marks.find((k) => k.mission === m.id);
      return `<div class="ln"><span class="vxp-dia" style="margin:0"></span><span style="flex:1"><i>${esc(m.title)}</i><br>${esc(o ? o.text : '')}${mk ? ' · ' + dist(Math.hypot(mk.x - me.x, mk.z - me.z)) : ''}</span></div>${mk ? `<div><button class="vxp-btn" data-a="showmap" data-m="${m.id}">SHOW ON MAP ${kc('ENTER')}</button></div>` : ''}`;
    }).join('');
    d.missions.read(thread);
  };
  // ---- map ----
  const mapCv = apps.map.querySelector('canvas') as HTMLCanvasElement, mapBox = apps.map.querySelector('.vxp-map') as HTMLElement;
  const view = { cx: 0, cz: -24, zoom: 1, follow: true };
  let mapDrag: { x: number; y: number } | null = null, lastMap = -1;
  const mapK = () => { const b = mapBox.getBoundingClientRect(); const B = d.plan.bounds; return Math.min(b.width / (B.x1 - B.x0), b.height / (B.z1 - B.z0)) * 0.96 * view.zoom; };
  const drawMap = (t: number, cv = mapCv, size?: { width: number; height: number }) => {
    const b = size || mapBox.getBoundingClientRect(); if (!b.width || !b.height) return;
    const dpr = size ? 1 : Math.min(2, Math.max(1, window.devicePixelRatio || 1)), W = Math.round(b.width * dpr), H = Math.round(b.height * dpr);
    if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; }
    const g = cv.getContext('2d')!, B = d.plan.bounds, k = size ? Math.min(b.width / (B.x1 - B.x0), b.height / (B.z1 - B.z0)) * 0.96 : mapK();
    const me = d.me();
    if (!size) {
      if (view.follow) { const f = Math.min(1, (view.zoom - 1) / 0.6); view.cx = (B.x0 + B.x1) / 2 + (me.x - (B.x0 + B.x1) / 2) * f; view.cz = (B.z0 + B.z1) / 2 + (me.z - (B.z0 + B.z1) / 2) * f; }
      // never panned off the district
      const hx = Math.max(0, (B.x1 - B.x0) / 2 - b.width / 2 / k), hz = Math.max(0, (B.z1 - B.z0) / 2 - b.height / 2 / k);
      view.cx = Math.max((B.x0 + B.x1) / 2 - hx, Math.min((B.x0 + B.x1) / 2 + hx, view.cx)); view.cz = Math.max((B.z0 + B.z1) / 2 - hz, Math.min((B.z0 + B.z1) / 2 + hz, view.cz));
    }
    const cx = size ? (B.x0 + B.x1) / 2 : view.cx, cz = size ? (B.z0 + B.z1) / 2 : view.cz;
    g.setTransform(1, 0, 0, 1, 0, 0); g.fillStyle = '#030304'; g.fillRect(0, 0, W, H);
    g.setTransform(dpr * k, 0, 0, dpr * k, W / 2 - cx * k * dpr, H / 2 - cz * k * dpr);
    const vw2 = b.width / 2 / k, vh2 = b.height / 2 / k, V = { x0: cx - vw2, x1: cx + vw2, z0: cz - vh2, z1: cz + vh2 };
    const o = { k, view: V, painted: d.painted };
    drawGround(g, d.plan, o); drawWalls(g, d.walls, o);
    const L = d.law(); if (L.on && Math.hypot(L.car.x - me.x, L.car.z - me.z) < 80) drawLaw(g, L, o);
    // the places you know, by name
    const known = new Set(d.missions.known());
    g.font = `700 ${10 / k}px ${UI}`; g.textAlign = 'center'; g.textBaseline = 'middle';
    { const C = d.plan.canal, s = 'CANAL'; g.font = `800 ${9 / k}px ${UI}`; g.fillStyle = 'rgba(255,255,255,.55)'; g.save(); g.translate(B.x0 + 14, (C.z0 + C.z1) / 2); g.fillText(s.split('').join(' '), 0, 0); g.restore(); g.font = `700 ${10 / k}px ${UI}`; }
    for (const p of d.plan.places) { if (!known.has(p.id)) continue; const s = p.name.toUpperCase(); g.lineWidth = 3 / k; g.strokeStyle = 'rgba(0,0,0,.85)'; g.strokeText(s, p.x, p.z - 6 / k); g.fillStyle = 'rgba(255,255,255,.88)'; g.fillText(s, p.x, p.z - 6 / k); g.fillStyle = '#fff'; g.beginPath(); g.arc(p.x, p.z, 2 / k, 0, Math.PI * 2); g.fill(); }
    for (const m of d.missions.markers()) drawMarker(g, m.x, m.z, k, t, 7);
    drawYou(g, me.x, me.z, me.heading, k, 9);
  };
  const renderObjs = () => {
    const box = apps.map.querySelector('.vxp-objs') as HTMLElement, marks = d.missions.markers(), me = d.me();
    objSel = Math.max(0, Math.min(marks.length - 1, objSel));
    box.innerHTML = marks.map((m, i) => `<div class="vxp-obj${i === objSel && !view.follow ? ' sel' : ''}" data-mk="${i}"><span class="vxp-dia" style="margin:0"></span><div class="m"><i>${esc(m.title)}</i>${esc(m.text)}</div><span class="d">${dist(Math.hypot(m.x - me.x, m.z - me.z))}</span></div>`).join('');
  };
  const centreOn = (x: number, z: number) => { view.follow = false; view.cx = x; view.cz = z; view.zoom = Math.max(view.zoom, 2.2); lastMap = -1; };
  mapBox.addEventListener('pointerdown', (e) => { if ((e.target as Element).closest('button')) return; mapDrag = { x: e.clientX, y: e.clientY }; mapBox.setPointerCapture(e.pointerId); mapBox.style.cursor = 'grabbing'; });
  mapBox.addEventListener('pointermove', (e) => { if (!mapDrag) return; const k = mapK(); view.follow = false; view.cx -= (e.clientX - mapDrag.x) / k; view.cz -= (e.clientY - mapDrag.y) / k; mapDrag = { x: e.clientX, y: e.clientY }; lastMap = -1; });
  const endMap = () => { mapDrag = null; mapBox.style.cursor = ''; };
  mapBox.addEventListener('pointerup', endMap); mapBox.addEventListener('pointercancel', endMap);
  mapBox.addEventListener('wheel', (e) => { e.preventDefault(); zoomBy(Math.exp(-e.deltaY * 0.0015)); }, { passive: false });
  const zoomBy = (f: number) => { view.zoom = Math.max(1, Math.min(7, view.zoom * f)); lastMap = -1; };
  // ---- music ----
  const renderMusic = () => {
    const s = d.music(), b = apps.music.querySelector('.vxp-mt b') as HTMLElement, sub = apps.music.querySelector('.vxp-mt span') as HTMLElement, pp = apps.music.querySelector('.pp') as HTMLElement;
    b.textContent = s ? s.title.toUpperCase() : 'NO SOUNDTRACK';
    sub.textContent = s ? `VEXVOID · ${s.index + 1} OF ${s.tracks}${s.on ? (s.waiting ? ' · WAITING FOR SOUND' : '') : ' · OFF'}` : 'THIS GAME RUNS WITHOUT ONE';
    const on = !!s && s.on; if (pp.dataset.on !== String(on)) { pp.dataset.on = String(on); pp.innerHTML = on ? pause : play; }
    apps.music.querySelector('.vxp-art')!.classList.toggle('on', on);
  };
  const eqTick = (t: number) => { const s = d.music(), on = !!s && s.on; apps.music.querySelectorAll('.eq i').forEach((e, i) => { (e as HTMLElement).style.height = on ? `${18 + 70 * Math.abs(Math.sin(t * (1.3 + (i % 5) * 0.37) + i * 1.7)) * (0.5 + 0.5 * Math.sin(t * 0.7 + i))}%` : '8%'; }); };
  // ---- camera ----
  const camCv = apps.camera.querySelector('canvas') as HTMLCanvasElement, camBox = apps.camera.querySelector('.vxp-cam') as HTMLElement;
  const refreshThumb = () => { void d.lastThumb().then((u) => { (apps.camera.querySelector('.vxp-th0') as HTMLElement).style.backgroundImage = u ? `url("${u}")` : ''; }); };
  // the lens shows the whole frame, as the photo will be (not a crop of it): fitted in what the shutter bar leaves,
  // the corner brackets and the thirds on the picture itself
  let vfKey = '';
  const drawFinder = (src: HTMLCanvasElement) => {
    const b = camBox.getBoundingClientRect(); if (!b.width || !src.width) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1), W = Math.round(b.width * dpr), H = Math.round(b.height * dpr);
    if (camCv.width !== W || camCv.height !== H) { camCv.width = W; camCv.height = H; }
    const bar = 96, aw = land ? b.width - bar : b.width, ah = land ? b.height : b.height - bar, s = Math.min(aw / src.width, ah / src.height);
    const dw = src.width * s, dh = src.height * s, dx = (aw - dw) / 2, dy = Math.max(land ? 0 : 52, (ah - dh) / 2);
    const g = camCv.getContext('2d')!; g.fillStyle = '#000'; g.fillRect(0, 0, W, H);
    try { g.drawImage(src, 0, 0, src.width, src.height, dx * dpr, dy * dpr, dw * dpr, dh * dpr); } catch { /* a lost context */ }
    const k = [dx, dy, dw, dh].map(Math.round).join(',');
    if (k !== vfKey) { vfKey = k; for (const q of ['.vxp-vf', '.vxp-g3']) { const e = apps.camera.querySelector(q) as HTMLElement, m = q === '.vxp-vf' ? 8 : 0; e.style.left = dx + m + 'px'; e.style.top = dy + m + 'px'; e.style.width = dw - 2 * m + 'px'; e.style.height = dh - 2 * m + 'px'; } }
  };

  // ---- switching ----
  const show = (id: AppId) => {
    if (app === 'gallery' && id !== 'gallery' && gallery && gallery.isOpen()) { const g = gallery; app = id; g.open(false); }
    app = id;
    for (const k of Object.keys(apps) as AppId[]) apps[k].classList.toggle('on', k === id);
    hi.style.display = id === 'camera' ? 'none' : '';
    if (id === 'gallery' && gallery && !gallery.isOpen()) gallery.open(true);
    if (id === 'camera') refreshThumb();
    if (id === 'map') { lastMap = -1; renderObjs(); }
    refresh(); d.focus();
  };
  const refresh = () => {
    if (!isOpen) return;
    if (app === 'home') renderHome();
    if (app === 'messages') { renderList(); renderThread(); }
    if (app === 'music') renderMusic();
    if (app === 'map') renderObjs();
  };
  const open = (id: AppId = 'home', o: { thread?: string | null; direct?: boolean } = {}) => {
    const was = isOpen;
    if (!was) { isOpen = true; root.classList.add('on'); direct = !!o.direct; d.onOpen(true); hideBanner(); }
    else if (o.direct === false) direct = false;
    if (id === 'messages' && o.thread !== undefined) thread = o.thread;
    if (id === 'map' && !was) view.follow = true;
    show(id);
  };
  const close = () => {
    if (!isOpen) return;
    if (gallery && gallery.isOpen()) { app = 'home'; gallery.open(false); }
    isOpen = false; root.classList.remove('on'); direct = false; d.onOpen(false); d.focus();
  };
  /** Back: out of a thread, out of an app to home, home puts it away (an app opened straight from a key goes away). */
  const back = () => {
    if (app === 'messages' && thread && !land && !direct) { thread = null; refresh(); return; }
    if (app === 'home' || direct) { close(); return; }
    show('home');
  };
  const openApp = (id: AppId) => { if (id === 'home') return show('home'); direct = false; if (id === 'messages') thread = null; show(id); };

  root.addEventListener('click', (e) => {
    const t = e.target as Element, a = (t.closest('[data-a]') as HTMLElement | null)?.dataset.a;
    if (e.target === root) { close(); return; }
    if (t.closest('.vxg')) return;   // the gallery's own buttons (back, next, delete...) are the gallery's
    if (!a) { const row = t.closest('[data-th]') as HTMLElement | null; if (row) { thread = row.dataset.th!; rowSel = d.missions.threads().findIndex((x) => x.id === thread); refresh(); } const ob = t.closest('[data-mk]') as HTMLElement | null; if (ob) { const m = d.missions.markers()[+ob.dataset.mk!]; objSel = +ob.dataset.mk!; if (m) centreOn(m.x, m.z); renderObjs(); } d.focus(); return; }
    if (a === 'back') back(); else if (a === 'home') { if (app === 'home') close(); else { direct = false; show('home'); } }
    else if (a === 'now') { const c = d.missions.current(); openApp('messages'); if (c) { thread = d.missions.mission(c.mission)?.from || null; refresh(); } }
    else if ((APPS as { id: string }[]).some((x) => x.id === a)) openApp(a as AppId);
    else if (a === 'showmap') { const m = d.missions.markers().find((k) => k.mission === (t.closest('[data-m]') as HTMLElement).dataset.m); openApp('map'); if (m) centreOn(m.x, m.z); }
    else if (a === 'zin') zoomBy(1.5); else if (a === 'zout') zoomBy(1 / 1.5); else if (a === 'me') { view.follow = true; lastMap = -1; renderObjs(); }
    else if (a === 'pp') { d.musicToggle(); renderMusic(); } else if (a === 'next') { d.musicNext(); renderMusic(); }
    else if (a === 'shoot') d.shoot(); else if (a === 'pmode') { close(); d.photoMode(); } else if (a === 'photos') openApp('gallery');
    d.focus();
  });
  // ---- the banner ----
  const hideBanner = () => { banner.classList.remove('on'); bannerFor = ''; clearTimeout(bannerT); };
  banner.addEventListener('click', () => { const c = bannerFor; hideBanner(); open('messages', { thread: c, direct: true }); });
  const placeBanner = () => {
    const left0 = d.avoid(), w = Math.min(430, vw - 32), x = Math.max((vw - w) / 2, left0 + 12), ww = Math.min(w, vw - x - 16);
    banner.style.left = x + 'px'; banner.style.width = Math.max(180, ww) + 'px';
  };
  const notify = (m: Msg) => {
    if (m.from === 'me') return;
    if (isOpen && app === 'messages' && (thread === m.from)) { refresh(); return; }
    banner.innerHTML = `${avatar(m.from)}<div class="t"><b>${esc(CONTACTS[m.from]?.name || m.from.toUpperCase())}</b><span>${esc(m.text || 'Photo')}</span></div>${kc('E')}`;
    bannerFor = m.from; placeBanner(); banner.classList.add('on');
    clearTimeout(bannerT); bannerT = window.setTimeout(hideBanner, 4800);
    buzz(d.sound());
    refresh();
  };

  // ---- keys ----
  const homeKey = (k: string) => {
    const n = APPS.length;
    if (k >= '1' && k <= String(n) && k.length === 1) { sel = +k - 1; openApp(APPS[sel].id); return; }
    if (k === 'ArrowRight' || k === 'd') sel = (sel + 1) % n; else if (k === 'ArrowLeft' || k === 'a') sel = (sel + n - 1) % n;
    else if (k === 'ArrowDown' || k === 's') sel = Math.min(n - 1, sel + gridCols); else if (k === 'ArrowUp' || k === 'w') sel = Math.max(0, sel - gridCols);
    else if (k === 'Enter' || k === ' ') { openApp(APPS[sel].id); return; }
    renderHome();
  };
  const msgKey = (k: string) => {
    const ts = d.missions.threads();
    if (!thread || land) {
      if (k === 'ArrowDown' || k === 's') { rowSel = Math.min(ts.length - 1, rowSel + 1); if (land && ts[rowSel]) thread = ts[rowSel].id; refresh(); return; }
      if (k === 'ArrowUp' || k === 'w') { rowSel = Math.max(0, rowSel - 1); if (land && ts[rowSel]) thread = ts[rowSel].id; refresh(); return; }
      if (!thread && (k === 'Enter' || k === ' ' || k === 'ArrowRight' || k === 'd') && ts[rowSel]) { thread = ts[rowSel].id; refresh(); return; }
    }
    if (thread) {
      const bub = apps.messages.querySelector('.vxp-bub') as HTMLElement;
      if (!land && (k === 'ArrowDown' || k === 's')) bub.scrollTop += 60; else if (!land && (k === 'ArrowUp' || k === 'w')) bub.scrollTop -= 60;
      else if (k === 'Enter' || k === ' ') { const ms = d.missions.list().filter((m) => m.from === thread && m.status === 'active'); const mk = d.missions.markers().find((x) => ms.some((m) => m.id === x.mission)); if (mk) { openApp('map'); centreOn(mk.x, mk.z); } }
      else if (!land && (k === 'ArrowLeft' || k === 'a')) back();
    }
  };
  const mapKey = (k: string) => {
    const k0 = mapK(), step = 60 / k0;
    if (k === 'ArrowLeft' || k === 'a') { view.follow = false; view.cx -= step; } else if (k === 'ArrowRight' || k === 'd') { view.follow = false; view.cx += step; }
    else if (k === 'ArrowUp' || k === 'w') { view.follow = false; view.cz -= step; } else if (k === 'ArrowDown' || k === 's') { view.follow = false; view.cz += step; }
    else if (k === '=' || k === '+') zoomBy(1.5); else if (k === '-') zoomBy(1 / 1.5);
    else if (k === 'c') view.follow = true;
    else if (k === 'Enter' || k === ' ' || k === 'Tab') { const ms = d.missions.markers(); if (ms.length) { objSel = (view.follow ? 0 : objSel + 1) % ms.length; centreOn(ms[objSel].x, ms[objSel].z); } }
    lastMap = -1; renderObjs();
  };
  /** A key while the phone is out (k: e.key, letters lower case). */
  const key = (k: string) => {
    if (!isOpen) return false;
    if (k === 'e') { close(); return true; }
    if (k === 'l') { if (app === 'gallery') close(); else { direct = false; show('gallery'); } return true; }
    if (app === 'gallery' && gallery) {
      if (k === 'Escape') { gallery.key('Escape'); if (!gallery.isOpen() && isOpen && app === 'gallery') { if (direct) close(); else show('home'); } return true; }
      gallery.key(k); return true;
    }
    if (k === 'Escape' || k === 'Backspace') { back(); return true; }
    if (app === 'home') homeKey(k);
    else if (app === 'messages') msgKey(k);
    else if (app === 'map') mapKey(k);
    else if (app === 'music') { if (k === ' ' || k === 'Enter') { d.musicToggle(); renderMusic(); } else if (k === 'ArrowRight' || k === 'n' || k === 'd') { d.musicNext(); renderMusic(); } }
    else if (app === 'camera') { if (k === ' ' || k === 'Enter') d.shoot(); else if (k === 'o') { close(); d.photoMode(); } }
    return true;
  };

  let lastSlow = -1, aimN = 0;
  return {
    el: root, banner,
    /** The gallery lives in the PHOTOS app: give it this element as its host. */
    slot: (id: AppId) => apps[id],
    bindGallery: (g: Gallery) => { gallery = g; },
    open, close, back, key, notify,
    isOpen: () => isOpen,
    app: () => app,
    /** The gallery was closed from inside (its own CLOSE): back home, or away if it was opened straight. */
    galleryClosed: () => { if (isOpen && app === 'gallery') { if (direct) close(); else show('home'); } },
    refresh,
    /** Every frame, after the picture is drawn: the lens copies it, the map and the music keep up. */
    tick: (t: number, frameSrc: HTMLCanvasElement) => {
      if (!isOpen) return;
      if (app === 'camera') {
        drawFinder(frameSrc);
        if (++aimN % 6 === 0) { const a = d.aim(), el = apps.camera.querySelector('.vxp-aim') as HTMLElement, vf = apps.camera.querySelector('.vxp-vf') as HTMLElement;
          el.style.display = a ? 'block' : 'none'; if (a) { el.textContent = a.framed ? `${a.target} · IN FRAME · SHOOT` : `FRAME ${a.target}`; el.classList.toggle('ok', a.framed); } vf.classList.toggle('ok', !!a && a.framed); }
      }
      if (app === 'map' && (t - lastMap > 0.1 || lastMap < 0)) { lastMap = t; drawMap(t); }
      if (app === 'music') eqTick(t);
      if (t - lastSlow > 0.5) { lastSlow = t; (scr.querySelector('.vxp-sb .tm') as HTMLElement).textContent = hm(Date.now()); if (app === 'music') renderMusic(); if (app === 'home') renderHome(); if (app === 'map') renderObjs(); }
    },
    resize: (w: number, h: number) => { layout(w, h); if (banner.classList.contains('on')) placeBanner(); },
    state: (): PhoneState => ({ open: isOpen, app, thread, sel, unread: d.missions.unread(), land, w: PW, h: PH, banner: banner.classList.contains('on') ? bannerFor : '', apps: APPS.map((a) => a.id) }),
    /** The phone's map as a picture (the whole district, north up, markers, you): a PNG data URL. */
    mapPng: (width = 1200) => { const B = d.plan.bounds, h = Math.round(width * (B.z1 - B.z0) / (B.x1 - B.x0)), c = document.createElement('canvas'); drawMap(performance.now() / 1000, c, { width, height: h }); return c.toDataURL('image/png'); },
    dispose: () => { clearTimeout(bannerT); root.remove(); banner.remove(); },
  };
}
export type Phone = ReturnType<typeof makePhone>;
