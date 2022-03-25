
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
