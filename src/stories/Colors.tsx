import { invert } from "polished";

import "../assets/styles/global.css";

export function Colors() {
  const rowTitleStyle = "w-[40px] p-2";
  const defaultSizeStyle = "h-[70px] w-[300px] rounded-[10px]";
  const subSizeStyle = "h-[50px] w-[300px] rounded-[10px]";

  const renderColorName = (colorBase: string) => (
    <div className="h-[100%] w-[100%] p-2 flex items-end justify-end">
      <span style={{ color: invert(colorBase) }}>{colorBase}</span>
    </div>
  );

  return (
    <div className="w-[100%]">
      <div className="w-[100%] flex flex-col gap-2.5">
        <div className="flex align-center flex-row gap-2">
          <div
            className={`h-[70px] ${rowTitleStyle} flex items-center justify-center`}
          >
            <span className="text-[24px] font-bold uppercase">base</span>
          </div>
          <div className={`${defaultSizeStyle} bg-blue`}>
            {renderColorName("#025a9d")}
          </div>
          <div className={`${defaultSizeStyle} bg-black`}>
            {renderColorName("#11100e")}
          </div>
          <div className={`${defaultSizeStyle} bg-gray`}>
            {renderColorName("#cecdc8")}
          </div>
          <div className={`${defaultSizeStyle} bg-lightblue`}>
            {renderColorName("#3aaaff")}
          </div>
          <div className={`${defaultSizeStyle} bg-error`}>
            {renderColorName("#ff5555")}
          </div>
          <div className={`${defaultSizeStyle} bg-success`}>
            {renderColorName("#419f59")}
          </div>
          <div className={`${defaultSizeStyle} bg-warning`}>
            {renderColorName("#f5a623")}
          </div>
        </div>
        {/* bg-10 */}
        <div className="w-[100%] flex align-center flex-row gap-2">
          <div
            className={`h-[50px] ${rowTitleStyle} flex items-center justify-center`}
          >
            <span className="text-[24px] font-bold uppercase">10%</span>
          </div>
          <div className={`${subSizeStyle} bg-blue-10`} />
          <div className={`${subSizeStyle} bg-black-10`} />
          <div className={`${subSizeStyle} bg-gray-10`} />
          <div className={`${subSizeStyle} bg-lightblue-10`} />
          <div className={`${subSizeStyle} bg-error-10`} />
          <div className={`${subSizeStyle} bg-success-10`} />
          <div className={`${subSizeStyle} bg-warning-10`} />
        </div>

        {/* bg-20 */}
        <div className="w-[100%] flex align-center flex-row gap-2">
          <div
            className={`h-[50px] ${rowTitleStyle} flex items-center justify-center`}
          >
            <span className="text-[24px] font-bold uppercase">20%</span>
          </div>
          <div className={`${subSizeStyle} bg-blue-20`} />
          <div className={`${subSizeStyle} bg-black-20`} />
          <div className={`${subSizeStyle} bg-gray-20`} />
          <div className={`${subSizeStyle} bg-lightblue-20`} />
          <div className={`${subSizeStyle} bg-error-20`} />
          <div className={`${subSizeStyle} bg-success-20`} />
          <div className={`${subSizeStyle} bg-warning-20`} />
        </div>

        {/* bg-30 */}
        <div className="w-[100%] flex align-center flex-row gap-2">
          <div
            className={`h-[50px] ${rowTitleStyle} flex items-center justify-center`}
          >
            <span className="text-[24px] font-bold uppercase">30%</span>
          </div>
          <div className={`${subSizeStyle} bg-blue-30`} />
          <div className={`${subSizeStyle} bg-black-30`} />
          <div className={`${subSizeStyle} bg-gray-30`} />
          <div className={`${subSizeStyle} bg-lightblue-30`} />
          <div className={`${subSizeStyle} bg-error-30`} />
          <div className={`${subSizeStyle} bg-success-30`} />
          <div className={`${subSizeStyle} bg-warning-30`} />
        </div>

        {/* bg-40 */}
        <div className="w-[100%] flex align-center flex-row gap-2">
          <div
            className={`h-[50px] ${rowTitleStyle} flex items-center justify-center`}
          >
            <span className="text-[24px] font-bold uppercase">40%</span>
          </div>
          <div className={`${subSizeStyle} bg-blue-40`} />
          <div className={`${subSizeStyle} bg-black-40`} />
          <div className={`${subSizeStyle} bg-gray-40`} />
          <div className={`${subSizeStyle} bg-lightblue-40`} />
          <div className={`${subSizeStyle} bg-error-40`} />
          <div className={`${subSizeStyle} bg-success-40`} />
          <div className={`${subSizeStyle} bg-warning-40`} />
        </div>

        {/* bg-50 */}
        <div className="w-[100%] flex align-center flex-row gap-2">
          <div
            className={`h-[50px] ${rowTitleStyle} flex items-center justify-center`}
          >
            <span className="text-[24px] font-bold uppercase">50%</span>
          </div>
          <div className={`${subSizeStyle} bg-blue-50`} />
          <div className={`${subSizeStyle} bg-black-50`} />
          <div className={`${subSizeStyle} bg-gray-50`} />
          <div className={`${subSizeStyle} bg-lightblue-50`} />
          <div className={`${subSizeStyle} bg-error-50`} />
          <div className={`${subSizeStyle} bg-success-50`} />
          <div className={`${subSizeStyle} bg-warning-50`} />
        </div>

        {/* bg-60 */}
        <div className="w-[100%] flex align-center flex-row gap-2">
          <div
            className={`h-[50px] ${rowTitleStyle} flex items-center justify-center`}
          >
            <span className="text-[24px] font-bold uppercase">60%</span>
          </div>
          <div className={`${subSizeStyle} bg-blue-60`} />
          <div className={`${subSizeStyle} bg-black-60`} />
          <div className={`${subSizeStyle} bg-gray-60`} />
          <div className={`${subSizeStyle} bg-lightblue-60`} />
          <div className={`${subSizeStyle} bg-error-60`} />
          <div className={`${subSizeStyle} bg-success-60`} />
          <div className={`${subSizeStyle} bg-warning-60`} />
        </div>

        {/* bg-70 */}
        <div className="w-[100%] flex align-center flex-row gap-2">
          <div
            className={`h-[50px] ${rowTitleStyle} flex items-center justify-center`}
          >
            <span className="text-[24px] font-bold uppercase">70%</span>
          </div>
          <div className={`${subSizeStyle} bg-blue-70`} />
          <div className={`${subSizeStyle} bg-black-70`} />
          <div className={`${subSizeStyle} bg-gray-70`} />
          <div className={`${subSizeStyle} bg-lightblue-70`} />
          <div className={`${subSizeStyle} bg-error-70`} />
          <div className={`${subSizeStyle} bg-success-70`} />
          <div className={`${subSizeStyle} bg-warning-70`} />
        </div>

        {/* bg-80 */}
        <div className="w-[100%] flex align-center flex-row gap-2">
          <div
            className={`h-[50px] ${rowTitleStyle} flex items-center justify-center`}
          >
            <span className="text-[24px] font-bold uppercase">80%</span>
          </div>
          <div className={`${subSizeStyle} bg-blue-80`} />
          <div className={`${subSizeStyle} bg-black-80`} />
          <div className={`${subSizeStyle} bg-gray-80`} />
          <div className={`${subSizeStyle} bg-lightblue-80`} />
          <div className={`${subSizeStyle} bg-error-80`} />
          <div className={`${subSizeStyle} bg-success-80`} />
          <div className={`${subSizeStyle} bg-warning-80`} />
        </div>

        {/* bg-90 */}
        <div className="w-[100%] flex align-center flex-row gap-2">
          <div
            className={`h-[50px] ${rowTitleStyle} flex items-center justify-center`}
          >
            <span className="text-[24px] font-bold uppercase">90%</span>
          </div>
          <div className={`${subSizeStyle} bg-blue-90`} />
          <div className={`${subSizeStyle} bg-black-90`} />
          <div className={`${subSizeStyle} bg-gray-90`} />
          <div className={`${subSizeStyle} bg-lightblue-90`} />
          <div className={`${subSizeStyle} bg-error-90`} />
          <div className={`${subSizeStyle} bg-success-90`} />
          <div className={`${subSizeStyle} bg-warning-90`} />
        </div>

        {/* bg-100 */}
        <div className="w-[100%] flex align-center flex-row gap-2">
          <div
            className={`h-[50px] ${rowTitleStyle} flex items-center justify-center`}
          >
            <span className="text-[24px] font-bold uppercase">100%</span>
          </div>
          <div className={`${subSizeStyle} bg-blue-100`} />
          <div className={`${subSizeStyle} bg-black-100`} />
          <div className={`${subSizeStyle} bg-gray-100`} />
          <div className={`${subSizeStyle} bg-lightblue-100`} />
          <div className={`${subSizeStyle} bg-error-100`} />
          <div className={`${subSizeStyle} bg-success-100`} />
          <div className={`${subSizeStyle} bg-warning-100`} />
        </div>
      </div>
    </div>
  );
}
