
declare class QRCodeGenerator extends NSObject {

	static alloc(): QRCodeGenerator; // inherited from NSObject

	// eslint-disable-next-line @typescript-eslint/no-misused-new
	static new(): QRCodeGenerator; // inherited from NSObject

	backgroundColor: CIColor;

	color: CIColor;

	readonly data: NSData;

	errorCorrection: QRErrorCorrection;

	size: CGSize;

	constructor(o: { data: NSData; });

	constructor(o: { string: string; });

	getImage(): UIImage;

	initWithData(data: NSData): this;

	initWithString(string: string): this;
}

declare const enum QRErrorCorrection {

	Low = 0,

	Medium = 1,

	Quartile = 2,

	High = 3
}

// eslint-disable-next-line no-var
declare var iOS_QR_Code_GeneratorVersionNumber: number;

// eslint-disable-next-line no-var
declare var iOS_QR_Code_GeneratorVersionString: interop.Reference<number>;

// Add missing types for CIColor. Once added on the NS reference files, remove it
declare class CIColor extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CIColor; // inherited from NSObject

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	static colorWithCGColor(c: any): CIColor;

	static colorWithRGBA(rgba: string): CIColor;

	static colorWithRedGreenBlue(r: number, g: number, b: number): CIColor;

	static colorWithRedGreenBlueAlpha(r: number, g: number, b: number, a: number): CIColor;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	static colorWithRedGreenBlueAlphaColorSpace(r: number, g: number, b: number, a: number, colorSpace: any): CIColor;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	static colorWithRedGreenBlueColorSpace(r: number, g: number, b: number, colorSpace: any): CIColor;

	static colorWithString(representation: string): CIColor;

	// eslint-disable-next-line @typescript-eslint/no-misused-new
	static new(): CIColor; // inherited from NSObject

	readonly alpha: number;

	readonly blue: number;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	readonly colorSpace: any;

	readonly components: interop.Pointer | interop.Reference<number>;

	readonly green: number;

	readonly numberOfComponents: number;

	readonly red: number;

	readonly stringRepresentation: string;

	static readonly blackColor: CIColor;

	static readonly blueColor: CIColor;

	static readonly clearColor: CIColor;

	static readonly cyanColor: CIColor;

	static readonly grayColor: CIColor;

	static readonly greenColor: CIColor;

	static readonly magentaColor: CIColor;

	static readonly redColor: CIColor;

	static readonly whiteColor: CIColor;

	static readonly yellowColor: CIColor;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	constructor(o: { CGColor: any; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { color: UIColor; });

	constructor(o: { red: number; green: number; blue: number; });

	constructor(o: { red: number; green: number; blue: number; alpha: number; });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	constructor(o: { red: number; green: number; blue: number; alpha: number; colorSpace: any; });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	constructor(o: { red: number; green: number; blue: number; colorSpace: any; });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	initWithCGColor(c: any): this;

	initWithCoder(coder: NSCoder): this;

	initWithColor(color: UIColor): this;

	initWithRedGreenBlue(r: number, g: number, b: number): this;

	initWithRedGreenBlueAlpha(r: number, g: number, b: number, a: number): this;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	initWithRedGreenBlueAlphaColorSpace(r: number, g: number, b: number, a: number, colorSpace: any): this;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
	initWithRedGreenBlueColorSpace(r: number, g: number, b: number, colorSpace: any): this;
}
