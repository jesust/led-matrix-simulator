import { prepareFont } from '../tools';

export const font = prepareFont([
	[0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00], //  
	[0xdf,0xdf,0x00,0x00,0x00,0x00,0x00,0x00], // !
	[0x07,0x07,0x00,0x07,0x07,0x00,0x00,0x00], // "
	[0x24,0x24,0xff,0x24,0x24,0xff,0x24,0x24], // #
	[0xdf,0xdf,0xdb,0xff,0xff,0xdb,0xfb,0xfb], // $
	[0xdf,0xdf,0x3b,0xff,0xff,0xdc,0xfb,0xfb], // %
	[0xff,0xff,0xdb,0xdf,0xdf,0x20,0xd8,0xd8], // &
	[0x07,0x07,0x00,0x00,0x00,0x00,0x00,0x00], // '
	[0x3c,0x3c,0xc3,0x00,0x00,0x00,0x00,0x00], // (
	[0xc3,0xc3,0x3c,0x00,0x00,0x00,0x00,0x00], // )
	[0xc3,0xc3,0x24,0xff,0xff,0x24,0xc3,0xc3], // *
	[0x18,0x18,0x18,0xff,0xff,0x18,0x18,0x18], // +
	[0xc0,0xc0,0x00,0x00,0x00,0x00,0x00,0x00], // ,
	[0x18,0x18,0x18,0x18,0x18,0x18,0x18,0x18], // -
	[0xc0,0xc0,0x00,0x00,0x00,0x00,0x00,0x00], // .
	[0xc0,0xc0,0x20,0x18,0x18,0x04,0x03,0x03], // /
	[0xff,0xff,0xe3,0xdb,0xdb,0xc7,0xff,0xff], // 0
	[0xc3,0xc3,0xff,0xc0,0xc0,0x00,0x00,0x00], // 1
	[0xfb,0xfb,0xdb,0xdb,0xdb,0xdb,0xdf,0xdf], // 2
	[0xdb,0xdb,0xdb,0xdb,0xdb,0xdb,0xff,0xff], // 3
	[0x1f,0x1f,0x18,0x18,0x18,0x18,0xff,0xff], // 4
	[0xdf,0xdf,0xdb,0xdb,0xdb,0xdb,0xfb,0xfb], // 5
	[0xff,0xff,0xdb,0xdb,0xdb,0xdb,0xfb,0xfb], // 6
	[0x07,0x07,0x03,0x03,0x03,0x03,0xff,0xff], // 7
	[0xff,0xff,0xdb,0xdb,0xdb,0xdb,0xff,0xff], // 8
	[0xdf,0xdf,0xdb,0xdb,0xdb,0xdb,0xff,0xff], // 9
	[0x24,0x24,0x00,0x00,0x00,0x00,0x00,0x00], // :
	[0xe4,0xe4,0x00,0x00,0x00,0x00,0x00,0x00], // ;
	[0x18,0x18,0x24,0xc3,0xc3,0x00,0x00,0x00], // <
	[0x24,0x24,0x24,0x24,0x24,0x24,0x24,0x24], // =
	[0xc3,0xc3,0x24,0x18,0x18,0x00,0x00,0x00], // >
	[0x07,0x07,0x03,0xdb,0xdb,0x1b,0x1f,0x1f], // ?
	[0xff,0xff,0xc3,0xfb,0xfb,0xdb,0xff,0xff], // @
	[0xff,0xff,0xdb,0x1b,0x1b,0xdb,0xff,0xff], // A
	[0xff,0xff,0xdb,0xdb,0xdb,0xdb,0xe7,0xe7], // B
	[0xff,0xff,0xc3,0xc3,0xc3,0xc3,0xe7,0xe7], // C
	[0xff,0xff,0xc3,0xc3,0xc3,0xc3,0x3c,0x3c], // D
	[0xff,0xff,0xdb,0xdb,0xdb,0xc3,0xe7,0xe7], // E
	[0xff,0xff,0xdb,0x1b,0x1b,0x03,0x07,0x07], // F
	[0xff,0xff,0xc3,0xdb,0xdb,0xdb,0xfb,0xfb], // G
	[0xff,0xff,0xdb,0x18,0x18,0xdb,0xff,0xff], // H
	[0xc3,0xc3,0xc3,0xff,0xff,0xc3,0xc3,0xc3], // I
	[0xe0,0xe0,0xc0,0xc0,0xc0,0xc3,0xff,0xff], // J
	[0xff,0xff,0xdb,0x18,0x18,0xdb,0xe7,0xe7], // K
	[0xff,0xff,0xc3,0xc0,0xc0,0xc0,0xe0,0xe0], // L
	[0xff,0xff,0xc3,0x1f,0x1f,0xc3,0xff,0xff], // M
	[0xff,0xff,0xc4,0x18,0x18,0x23,0xff,0xff], // N
	[0xff,0xff,0xc3,0xc3,0xc3,0xc3,0xff,0xff], // O
	[0xff,0xff,0xdb,0x1b,0x1b,0x1b,0x1f,0x1f], // P
	[0xff,0xff,0xc3,0xe3,0xe3,0xc3,0xff,0xff], // Q
	[0xff,0xff,0xdb,0x1b,0x1b,0xdb,0xe7,0xe7], // R
	[0xdf,0xdf,0xdb,0xdb,0xdb,0xdb,0xfb,0xfb], // S
	[0x07,0x07,0xc3,0xff,0xff,0xc3,0x07,0x07], // T
	[0xff,0xff,0xc3,0xc0,0xc0,0xc3,0xff,0xff], // U
	[0x1f,0x1f,0x23,0xc0,0xc0,0x23,0x1f,0x1f], // V
	[0xff,0xff,0xc3,0xf8,0xf8,0xc3,0xff,0xff], // W
	[0xe7,0xe7,0xdb,0x18,0x18,0xdb,0xe7,0xe7], // X
	[0x1f,0x1f,0xdb,0xf8,0xf8,0xdb,0x1f,0x1f], // Y
	[0xc7,0xc7,0xe3,0xdb,0xdb,0xc7,0xe3,0xe3], // Z
	[0xff,0xff,0xc3,0x00,0x00,0x00,0x00,0x00], // [
	[0x03,0x03,0x04,0x18,0x18,0x20,0xc0,0xc0], // "\"
	[0xc3,0xc3,0xff,0x00,0x00,0x00,0x00,0x00], // ]
	[0x04,0x04,0x03,0x04,0x04,0x00,0x00,0x00], // ^
	[0xc0,0xc0,0xc0,0xc0,0xc0,0xc0,0xc0,0xc0], // _
	[0x03,0x03,0x04,0x00,0x00,0x00,0x00,0x00], // `
	[0xff,0xff,0xdb,0x1b,0x1b,0xdb,0xff,0xff], // a
	[0xff,0xff,0xdb,0xdb,0xdb,0xdb,0xe7,0xe7], // b
	[0xff,0xff,0xc3,0xc3,0xc3,0xc3,0xe7,0xe7], // c
	[0xff,0xff,0xc3,0xc3,0xc3,0xc3,0x3c,0x3c], // d
	[0xff,0xff,0xdb,0xdb,0xdb,0xc3,0xe7,0xe7], // e
	[0xff,0xff,0xdb,0x1b,0x1b,0x03,0x07,0x07], // f
	[0xff,0xff,0xc3,0xdb,0xdb,0xdb,0xfb,0xfb], // g
	[0xff,0xff,0xdb,0x18,0x18,0xdb,0xff,0xff], // h
	[0xc3,0xc3,0xc3,0xff,0xff,0xc3,0xc3,0xc3], // i
	[0xe0,0xe0,0xc0,0xc0,0xc0,0xc3,0xff,0xff], // j
	[0xff,0xff,0xdb,0x18,0x18,0xdb,0xe7,0xe7], // k
	[0xff,0xff,0xc3,0xc0,0xc0,0xc0,0xe0,0xe0], // l
	[0xff,0xff,0xc3,0x1f,0x1f,0xc3,0xff,0xff], // m
	[0xff,0xff,0xc4,0x18,0x18,0x23,0xff,0xff], // n
	[0xff,0xff,0xc3,0xc3,0xc3,0xc3,0xff,0xff], // o
	[0xff,0xff,0xdb,0x1b,0x1b,0x1b,0x1f,0x1f], // p
	[0xff,0xff,0xc3,0xe3,0xe3,0xc3,0xff,0xff], // q
	[0xff,0xff,0xdb,0x1b,0x1b,0xdb,0xe7,0xe7], // r
	[0xdf,0xdf,0xdb,0xdb,0xdb,0xdb,0xfb,0xfb], // s
	[0x07,0x07,0xc3,0xff,0xff,0xc3,0x07,0x07], // t
	[0xff,0xff,0xc3,0xc0,0xc0,0xc3,0xff,0xff], // u
	[0x1f,0x1f,0x23,0xc0,0xc0,0x23,0x1f,0x1f], // v
	[0xff,0xff,0xc3,0xf8,0xf8,0xc3,0xff,0xff], // w
	[0xe7,0xe7,0xdb,0x18,0x18,0xdb,0xe7,0xe7], // x
	[0x1f,0x1f,0xdb,0xf8,0xf8,0xdb,0x1f,0x1f], // y
	[0xc7,0xc7,0xe3,0xdb,0xdb,0xc7,0xe3,0xe3], // z
	[0x18,0x18,0xff,0xc3,0xc3,0x00,0x00,0x00], // {
	[0xff,0xff,0x00,0x00,0x00,0x00,0x00,0x00], // |
	[0xc3,0xc3,0xff,0x18,0x18,0x00,0x00,0x00], // }
	[0x04,0x04,0x03,0x04,0x04,0x03,0x00,0x00], // ~
	[0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00]
]);
