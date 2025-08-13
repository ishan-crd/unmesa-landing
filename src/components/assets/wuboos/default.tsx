const DefaultWuboo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={240}
    height={240}
    viewBox="55 35 130 215"
    fill="none"
    {...props}
  >
    <style>
      {
        "\n    @keyframes blink {\n      0%, 90%, to { transform: scaleY(1) }\n      95% { transform: scaleY(0.1) }\n    }\n    @keyframes waveRightArm {\n      0%, 15%, to { transform: rotate(0deg) }\n      13%, 2% { transform: rotate(-135deg) }\n    }\n    @keyframes waveRightHand {\n      10%, 12%, 15%, 4%, 6%, 8%, to { transform: rotate(0deg) }\n      11%, 3%, 5%, 7%, 9% { transform: rotate(-45deg) }\n    }\n    @keyframes waveLeftArm {\n      0%, 15%, to { transform: rotate(0deg) }\n      13%, 2% { transform: rotate(135deg) }\n    }\n    @keyframes waveLeftHand {\n      0%, 10%, 12%, 15%, 4%, 6%, 8%, to { transform: rotate(0deg) }\n      11%, 3%, 5%, 7%, 9% { transform: rotate(45deg) }\n    }\n    @keyframes bob {\n      0%, to { transform: translateY(0) }\n      50% { transform: translateY(4px) }\n    }\n  "
      }
    </style>
    <g className="bot">
      <g className="head-group">
        <path
          d="m120 40 50 30v60l-50 30-50-30V70Z"
          fill="#90CAF9"
          stroke="#263238"
          strokeWidth={4}
        />
        <path
          d="m120 55 35 22v46l-35 22-35-22V77Z"
          fill="#E3F2FD"
          stroke="#263238"
          strokeWidth={2}
        />
        <circle
          cx={105}
          cy={100}
          r={5}
          fill="#263238"
          style={{
            transformOrigin: "105px 100px",
            animation: "blink 4s infinite",
          }}
        />
        <circle
          cx={135}
          cy={100}
          r={5}
          fill="#263238"
          style={{
            transformOrigin: "135px 100px",
            animation: "blink 4s infinite",
          }}
        />
        <circle
          cx={60}
          cy={100}
          r={10}
          fill="#64B5F6"
          stroke="#263238"
          strokeWidth={3}
        />
        <circle
          cx={180}
          cy={100}
          r={10}
          fill="#64B5F6"
          stroke="#263238"
          strokeWidth={3}
        />
        <path
          d="M90 165h60l-10 45h-40Z"
          fill="#90CAF9"
          stroke="#263238"
          strokeWidth={3}
        />
        <rect x={108} y={165} width={24} height={45} fill="white" />
        <path
          d="M90 165 L108 165 L120 195 L132 165 L150 165 L140 210 L100 210 Z"
          fill="black"
        />
        <path
          d="M116 162 L110 166 L116 170 Z M124 162 L130 166 L124 170 Z"
          fill="black"
        />
        <circle cx={120} cy={166} r={2} fill="black" />
        <circle cx={120} cy={175} r={1.5} fill="black" />
        <circle cx={120} cy={185} r={1.5} fill="black" />
        <circle cx={120} cy={195} r={1.5} fill="black" />
        <g
          style={{
            transformOrigin: "157px 175px",
            animation: "waveRightArm 10s infinite",
            animationDelay: "5s",
          }}
        >
          <rect
            x={150}
            y={170}
            width={15}
            height={20}
            rx={5}
            fill="black"
            stroke="#263238"
            strokeWidth={2}
          />
          <rect
            x={150}
            y={185}
            width={15}
            height={15}
            rx={5}
            fill="#64B5F6"
            stroke="#263238"
            strokeWidth={2}
            style={{
              transformOrigin: "157px 190px",
              animation: "waveRightHand 10s infinite",
              animationDelay: "5s",
            }}
          />
        </g>
        <g
          style={{
            transformOrigin: "82px 175px",
            animation: "waveLeftArm 10s infinite",
            animationDelay: "10s",
          }}
        >
          <rect
            x={75}
            y={170}
            width={15}
            height={20}
            rx={5}
            fill="black"
            stroke="#263238"
            strokeWidth={2}
          />
          <rect
            x={75}
            y={185}
            width={15}
            height={15}
            rx={5}
            fill="#64B5F6"
            stroke="#263238"
            strokeWidth={2}
            style={{
              transformOrigin: "82px 190px",
              animation: "waveLeftHand 10s infinite",
              animationDelay: "10s",
            }}
          />
        </g>
        <rect
          x={90}
          y={212}
          width={22}
          height={12}
          rx={3}
          fill="#64B5F6"
          stroke="#263238"
          strokeWidth={2}
        />
        <rect
          x={127}
          y={212}
          width={22}
          height={12}
          rx={3}
          fill="#64B5F6"
          stroke="#263238"
          strokeWidth={2}
        />
      </g>
    </g>
    <ellipse cx={120} cy={238} rx={40} ry={10} fill="rgba(0,0,0,0.2)" />
  </svg>
);
export default DefaultWuboo;
