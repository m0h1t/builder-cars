import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const getCarousels = async (): Promise<any> => {
	// replace model with your model name
	const data = await builder
		.getAll(
			"home-page-carousel",
			{
				cachebust: true,
      			cacheSeconds: 5
			}
			// {
			// query: {
			//     id: "abc123",
			//     data: {
			//         myCustomField: "someValue",
			//         someNumber: { $ne: 2 }
			//     }
			// }
			// }
		)
		.then((data) => {
			return data.map((d) => d.data);
		});
	console.log(data);
	return data;
};
