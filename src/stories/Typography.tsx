export function Typography() {
  return (
    <div className="w-[100%]">
      {/* Header */}
      <div className="w-[100%]">
        <h2 className="mb-5 font-bold">Header</h2>
        <div
          className="w-[100%]"
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: "4px",
          }}
        >
          <div className="">
            <span className="text-gray-70 font-bold">Type</span>
            <div className="mt-5!">
              <h1 className="mb-2!">H1</h1>
              <h2 className="border-none! border-b-0! mb-2! pb-0!">H2</h2>
              <h3>H3</h3>
            </div>
          </div>
          <div className="">
            <span className="text-gray-70 font-bold">Weight</span>
            <div className="mt-5!">
              <div className="flex flex-row gap-4 mb-2!">
                <h1 className="font-regular m-0!">Regular</h1>
                <h1 className="font-medium m-0!">Medium</h1>
                <h1 className="font-semibold m-0!">Semibold</h1>
                <h1 className="font-bold m-0!">Bold</h1>
              </div>
              <div className="flex flex-row gap-4 mb-2!">
                <h2 className="border-none! border-b-0! mb-0! pb-0! font-regular m-0!">
                  Regular
                </h2>
                <h2 className="border-none! border-b-0! mb-0! pb-0! font-medium m-0!">
                  Medium
                </h2>
                <h2 className="border-none! border-b-0! mb-0! pb-0! font-semibold! m-0!">
                  Semibold
                </h2>
                <h2 className="border-none! border-b-0! mb-0! pb-0! font-bold m-0!">
                  Bold
                </h2>
              </div>
              <div className="flex flex-row gap-4 mb-2!">
                <h3 className="font-regular m-0!">Regular</h3>
                <h3 className="font-medium m-0!">Medium</h3>
                <h3 className="font-semibold m-0!">Semibold</h3>
                <h3 className="font-bold m-0!">Bold</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Title */}
      <div className="w-[100%] mt-8!">
        <h2 className="mb-5 font-bold">Title</h2>
        <div
          className="w-[100%]"
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: "4px",
          }}
        >
          <div className="">
            <span className="text-gray-70 font-bold">Type</span>
            <div className="mt-5!">
              <p className="mb-0! text-[32px]!">T1</p>
              <p className="mb-0! text-[22px]!">T2</p>
              <p className="mb-0! text-xl!">T3</p>
            </div>
          </div>
          <div className="">
            <span className="text-gray-70 font-bold">Weight</span>
            <div className="mt-5!">
              <div className="flex flex-row gap-4 mt-4!">
                <p className="mb-0! text-[32px]! font-regular m-0!">Regular</p>
                <p className="mb-0! text-[32px]! font-medium m-0!">Medium</p>
                <p className="mb-0! text-[32px]! font-semibold m-0!">
                  Semibold
                </p>
                <p className="mb-0! text-[32px]! font-bold m-0!">Bold</p>
              </div>
              <div className="flex flex-row gap-4 mt-4!">
                <p className="mb-0! text-[22px]! font-regular m-0!">Regular</p>
                <p className="mb-0! text-[22px]! font-medium m-0!">Medium</p>
                <p className="mb-0! text-[22px]! font-semibold! m-0!">
                  Semibold
                </p>
                <p className="mb-0! text-[22px]! font-bold m-0!">Bold</p>
              </div>
              <div className="flex flex-row gap-4 mt-4!">
                <p className="mb-0! text-xl! font-regular m-0!">Regular</p>
                <p className="mb-0! text-xl! font-medium m-0!">Medium</p>
                <p className="mb-0! text-xl! font-semibold m-0!">Semibold</p>
                <p className="mb-0! text-xl! font-bold m-0!">Bold</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="w-[100%] mt-8!">
        <h2 className="mb-5 font-bold">Title</h2>
        <div
          className="w-[100%]"
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: "4px",
          }}
        >
          <div className="">
            <span className="text-gray-70 font-bold">Type</span>
            <div className="mt-5!">
              <p className="mb-0! text-[14px]!">text</p>
              <p className="mb-0! text-[12px]!">subtitle</p>
            </div>
          </div>
          <div className="">
            <span className="text-gray-70 font-bold">Weight</span>
            <div className="mt-5!">
              <div className="flex flex-row gap-4 mt-4!">
                <p className="mb-0! text-[14px]! font-regular m-0!">Regular</p>
                <p className="mb-0! text-[14px]! font-medium m-0!">Medium</p>
                <p className="mb-0! text-[14px]! font-semibold m-0!">
                  Semibold
                </p>
                <p className="mb-0! text-[14px]! font-bold m-0!">Bold</p>
              </div>
              <div className="flex flex-row gap-4 mt-4!">
                <p className="mb-0! text-[12px]! font-regular m-0!">Regular</p>
                <p className="mb-0! text-[12px]! font-medium m-0!">Medium</p>
                <p className="mb-0! text-[12px]! font-semibold! m-0!">
                  Semibold
                </p>
                <p className="mb-0! text-[12px]! font-bold m-0!">Bold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
