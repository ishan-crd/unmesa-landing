const YogaWuboo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={140}
    height={254}
    viewBox="50 10 140 220"
    fill="none"
    {...props}
  >
    <style>
      {
        "\n    @keyframes blink {\n      0%, 90%, to { transform: scaleY(1) }\n      95% { transform: scaleY(0.1) }\n    }\n    @keyframes swayFlow {\n      0%, to { transform: translateY(0) rotate(0deg) }\n      25% { transform: translateY(-2px) rotate(1deg) }\n      50% { transform: translateY(0) rotate(0deg) }\n      75% { transform: translateY(-2px) rotate(-1deg) }\n    }\n    @keyframes bobHalo {\n      0%, to { transform: translateY(0) }\n      50% { transform: translateY(-3px) }\n    }\n    @keyframes somaHeadSway {\n      0% { transform: rotate(0deg) translateX(0px) }\n      12% { transform: rotate(-2deg) translateX(-1px) }\n      25% { transform: rotate(-3deg) translateX(-2px) }\n      38% { transform: rotate(-1deg) translateX(-1px) }\n      50% { transform: rotate(0deg) translateX(0px) }\n      62% { transform: rotate(1deg) translateX(1px) }\n      75% { transform: rotate(3deg) translateX(2px) }\n      88% { transform: rotate(2deg) translateX(1px) }\n      to { transform: rotate(0deg) translateX(0px) }\n    }\n    @keyframes gentleWingFlap {\n      0%, to { transform: rotate(0deg) }\n      50% { transform: rotate(-5deg) }\n    }\n    @keyframes meditativeBreath {\n      0%, to { transform: scale(1) }\n      50% { transform: scale(1.02) }\n    }\n    @keyframes blessingLeftArm {\n      0%   { transform: rotate(0deg); }\n      10%  { transform: rotate(135deg); }\n      60%  { transform: rotate(135deg); }\n      70%  { transform: rotate(0deg); }\n      100% { transform: rotate(0deg); }\n    }\n    .left-arm-yoga {\n      animation: blessingLeftArm 6s infinite;\n      transform-origin: 82px 180px;\n    }\n    .right-arm-yoga {\n      transform-origin: 157px 180px;\n    }\n    .bob-halo-yoga {\n      transform-origin: 120px 20px;\n      animation: bobHalo 5s linear infinite;\n    }\n    .head-group-yoga {\n      transform-origin: 120px 100px;\n      animation: meditativeBreath 6s ease-in-out infinite,\n                 somaHeadSway 9s cubic-bezier(0.4, 0.0, 0.6, 1.0) infinite;\n    }\n  "
      }
    </style>
    <g className="bob-halo-yoga">
      <ellipse
        cx={120}
        cy={20}
        rx={30}
        ry={6}
        stroke="url(#somaHaloGradient)"
        strokeWidth={3}
        fill="none"
        opacity={0.8}
      />
      <defs>
        <linearGradient
          id="somaHaloGradient"
          x1={90}
          y1={20}
          x2={150}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E1F5FE" />
          <stop offset={0.5} stopColor="#81D4FA" />
          <stop offset={1} stopColor="#E1F5FE" />
        </linearGradient>
      </defs>
    </g>
    <g
      className="bot"
      style={{
        transformOrigin: "120px 160px",
      }}
    >
      <g className="head-group-yoga">
        <path
          d="m120 40 50 30v60l-50 30-50-30V70Z"
          fill="#81D4FA"
          stroke="#263238"
          strokeWidth={4}
        />
        <path
          d="m120 55 35 22v46l-35 22-35-22V77Z"
          fill="#E1F5FE"
          stroke="#263238"
          strokeWidth={2}
        />
        <path
          d="M95 100 Q105 95 115 100"
          stroke="#263238"
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M125 100 Q135 95 145 100"
          stroke="#263238"
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M110 115 Q120 120 130 115"
          stroke="#263238"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
        />
        <circle
          cx={60}
          cy={100}
          r={10}
          fill="#B39DDB"
          stroke="#263238"
          strokeWidth={3}
        />
        <path
          d="M60 95 L65 100 L60 105 L55 100 Z"
          fill="#E1BEE7"
          stroke="#263238"
          strokeWidth={1}
        />
        <circle
          cx={180}
          cy={100}
          r={10}
          fill="#B39DDB"
          stroke="#263238"
          strokeWidth={3}
        />
        <path
          d="M180 95 L185 100 L180 105 L175 100 Z"
          fill="#E1BEE7"
          stroke="#263238"
          strokeWidth={1}
        />
      </g>
      <path
        d="M90 165h60l-10 45h-40Z"
        fill="#81D4FA"
        stroke="#263238"
        strokeWidth={3}
      />
      <path
        d="M85 165 L155 165 L145 210 L95 210 Z"
        fill="#E8EAF6"
        stroke="#263238"
        strokeWidth={2}
      />
      <circle cx={110} cy={162} r={2} fill="#8E24AA" />
      <circle cx={115} cy={160} r={2} fill="#8E24AA" />
      <circle cx={120} cy={159} r={2} fill="#8E24AA" />
      <circle cx={125} cy={160} r={2} fill="#8E24AA" />
      <circle cx={130} cy={162} r={2} fill="#8E24AA" />
      <circle
        cx={120}
        cy={185}
        r={8}
        fill="white"
        stroke="#263238"
        strokeWidth={2}
      />
      <path d="M120 177 Q128 185 120 193 Q112 185 120 177" fill="#263238" />
      <circle cx={124} cy={181} r={2} fill="white" />
      <circle cx={116} cy={189} r={2} fill="#263238" />
      <g className="right-arm-yoga">
        <rect
          x={150}
          y={175}
          width={15}
          height={20}
          rx={5}
          fill="#E8EAF6"
          stroke="#263238"
          strokeWidth={2}
        />
        <ellipse
          cx={157}
          cy={195}
          rx={8}
          ry={6}
          fill="#81D4FA"
          stroke="#263238"
          strokeWidth={2}
        />
        <circle cx={157} cy={195} r={3} fill="#B3E5FC" />
      </g>
      <g className="left-arm-yoga">
        <rect
          x={75}
          y={175}
          width={15}
          height={20}
          rx={5}
          fill="#E8EAF6"
          stroke="#263238"
          strokeWidth={2}
        />
        <ellipse
          cx={82}
          cy={195}
          rx={8}
          ry={6}
          fill="#81D4FA"
          stroke="#263238"
          strokeWidth={2}
        />
        <circle cx={82} cy={195} r={3} fill="#B3E5FC" />
      </g>
      <ellipse
        cx={103}
        cy={218}
        rx={18}
        ry={8}
        fill="#81D4FA"
        stroke="#263238"
        strokeWidth={2}
      />
      <ellipse
        cx={137}
        cy={218}
        rx={18}
        ry={8}
        fill="#81D4FA"
        stroke="#263238"
        strokeWidth={2}
      />
    </g>
    <ellipse cx={120} cy={238} rx={40} ry={8} fill="rgba(129,212,250,0.3)" />
  </svg>
);
export default YogaWuboo;
