import "../assets/styles/global.css";

export function Colors() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div>
        <p style={{ marginTop: 0 }}>Primary Colors</p>
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <div
            style={{
              height: 50,
              width: 50,
              borderRadius: 10,
              backgroundColor: "var(--color-blue)",
            }}
          />
          <div
            style={{
              height: 50,
              width: 50,
              borderRadius: 10,
              backgroundColor: "var(--color-black)",
            }}
          />
          <div
            style={{
              height: 50,
              width: 50,
              borderRadius: 10,
              backgroundColor: "var(--color-gray)",
            }}
          />
          <div
            style={{
              height: 50,
              width: 50,
              borderRadius: 10,
              backgroundColor: "var(--color-lightblue)",
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 24, fontWeight: 500 }}>--color-blue</span>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: `var(--color-blue-${index + 1}0)`,
                padding: 5,
                borderRadius: 10,
              }}
            >
              {index + 1}0
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 24, fontWeight: 500 }}>--color-black</span>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: `var(--color-black-${index + 1}0)`,
                padding: 5,
                borderRadius: 10,
              }}
            >
              {index + 1}0
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 24, fontWeight: 500 }}>--color-gray</span>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: `var(--color-gray-${index + 1}0)`,
                padding: 5,
                borderRadius: 10,
              }}
            >
              {index + 1}0
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 24, fontWeight: 500 }}>--color-lightblue</span>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: `var(--color-lightblue-${index + 1}0)`,
                padding: 5,
                borderRadius: 10,
              }}
            >
              {index + 1}0
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
