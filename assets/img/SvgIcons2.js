const SvgIcons = ({ datatip, name, onClick, datafor, className, style }) => {
  switch (name) {
    case "Action":
      return (
        <svg
          height="24px"
          width="24px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#000000"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <path
              style={{ fill: "#004596" }}
              d="M385.68,512h-211.71c-7.757,0-14.047-6.29-14.047-14.047v-61.126c0-7.757,6.29-14.047,14.047-14.047 h112.366c7.757,0,14.047,6.29,14.047,14.047s-6.29,14.047-14.047,14.047h-98.318v33.032h183.615v-33.032h-23.106 c-7.757,0-14.047-6.29-14.047-14.047s6.29-14.047,14.047-14.047h37.153c7.757,0,14.047,6.29,14.047,14.047v61.126 C399.727,505.711,393.437,512,385.68,512z"
            ></path>{" "}
            <path
              style={{ fill: "#ffffff" }}
              d="M295.555,243.567v-13.574c0-13.571-11.07-25.129-25.299-25.611 c-14.938-0.506-27.213,10.887-27.213,25.011v14.648l-0.282-131.141c0-13.822-11.755-25.028-26.255-25.028h-1.01 c-14.501,0-26.255,11.205-26.255,25.028v94.179v21.655v65.448l-25.547-62.205c-4.494-13.419-19.559-20.819-33.637-16.535 c-14.078,4.291-21.842,18.645-17.347,32.068l56.094,115.516c6.928,14.268,21.918,23.402,38.41,23.41l150.982,0.066 c23.394,0.01,42.365-18.063,42.366-40.363l0.015-99.187c0-13.822-11.755-25.028-26.255-25.028l0,0 c-14.501,0-26.255,11.205-26.255,25.028v-5.949c0-13.822-11.755-25.028-26.255-25.028l0,0c-14.501,0-26.255,11.205-26.255,25.028"
            ></path>{" "}
            <path
              style={{ fill: "#004596" }}
              d="M374.323,207.879c-8.425,0-16.257,2.52-22.732,6.823c-7.376-7.844-17.996-12.773-29.78-12.773 c-7.133,0-13.841,1.806-19.659,4.971c-7.012-9.695-18.368-16.116-31.419-16.559c-1.162-0.041-2.321-0.029-3.474,0.029 c30.708-18.118,50.224-51.292,50.224-88.06C317.483,45.896,271.587,0,215.174,0c-56.415,0-102.311,45.896-102.311,102.311 c0,41.678,24.655,78.303,62.328,94.187v26.535c-8.5-17.677-29.559-27.013-49.232-21.027c-10.653,3.248-19.27,10.37-24.262,20.054 c-4.818,9.346-5.639,19.968-2.309,29.91c0.191,0.573,0.42,1.135,0.684,1.677l56.096,115.515 c9.235,19.017,29.27,31.311,51.042,31.321l150.981,0.066c0.008,0,0.017,0,0.025,0c14.932,0,29.003-5.572,39.625-15.692 c10.812-10.301,16.769-24.051,16.769-38.717l0.015-99.188C414.626,225.408,396.546,207.879,374.323,207.879z M140.957,102.311 c0-40.923,33.293-74.216,74.216-74.216c40.922,0,74.215,33.293,74.215,74.216c0,25.059-12.488,47.825-32.471,61.386l-0.059-26.958 c8.027-9.66,12.397-21.666,12.397-34.428c0-29.821-24.261-54.081-54.081-54.081s-54.081,24.261-54.081,54.081 c0,13.555,5.079,26.476,14.099,36.379v26.209C154.154,151.549,140.957,128.282,140.957,102.311z M386.517,346.137 c-0.001,6.904-2.861,13.432-8.053,18.379c-5.374,5.12-12.564,7.938-20.247,7.938c-0.004,0-0.008,0-0.014,0l-150.981-0.066 c-11.092-0.004-21.211-6.088-25.782-15.498l-55.618-114.534c-0.829-3.137-0.018-5.745,0.848-7.425 c1.489-2.885,4.145-5.034,7.476-6.051c6.734-2.044,14.168,1.41,16.227,7.559c0.098,0.295,0.206,0.587,0.326,0.875l25.547,62.205 c2.547,6.207,9.129,9.746,15.714,8.445c6.582-1.299,11.326-7.071,11.326-13.782V186.715c0-0.049,0-0.097,0-0.146v-73.669 c0-6.056,5.477-10.981,12.208-10.981h1.011c6.731,0,12.207,4.926,12.207,11.012l0.159,73.389c0,0.014,0,0.029,0,0.044l0.125,57.708 c0.017,7.748,6.3,14.018,14.047,14.018c0.004,0,0.011,0,0.015,0c7.753-0.008,14.032-6.294,14.032-14.047v-14.648 c0-2.777,1.163-5.431,3.276-7.473c2.462-2.378,5.82-3.624,9.413-3.499c6.467,0.219,11.728,5.411,11.728,11.572v13.575 c0,7.757,6.29,14.047,14.047,14.047c7.757,0,14.047-6.29,14.047-14.047v-2.562c0-6.056,5.477-10.981,12.208-10.981 c6.731,0,12.208,4.926,12.208,10.981v5.948c0,7.757,6.29,14.047,14.047,14.047c7.757,0,14.047-6.29,14.047-14.047 c0-6.054,5.477-10.979,12.208-10.979s12.208,4.926,12.208,10.976L386.517,346.137z"
            ></path>{" "}
          </g>
        </svg>
      );
    case "Actor":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#004596"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <circle cx="12" cy="3" r="2"></circle>
            <circle cx="12" cy="3" r="1"></circle>
            <path d="M12 8l0 9"></path>
            <path d="M5 10l14 0"></path>
            <path d="M7 23l5-7 5 7"></path>
          </g>
        </svg>
      );
    case "Add":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <g>
              {" "}
              <path
                d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                stroke="#004596"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      );
    case "Alarm":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="-2 -2 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              clip-rule="evenodd"
              d="M11 4.54125C8.11878 5.68927 6.0772 8.44184 6.07706 11.6767V17.9802L3.31773 20.658C3.12222 20.8387 3 21.0961 3 21.3818V21.5114C3 22.6045 3.89543 23.4906 5 23.4906H10.0255C10.2508 25.4654 11.9443 27 14 27C16.0557 27 17.7492 25.4654 17.9745 23.4906H23C24.1046 23.4906 25 22.6045 25 21.5114V21.382C25.0001 21.0963 24.8779 20.8388 24.6823 20.658L21.9232 17.9805V11.677C21.9231 8.44206 19.8814 5.6891 17 4.54114V3.47401C17 2.18459 15.9963 1.54919 15.6019 1.354C15.0885 1.09988 14.5194 1 14 1C13.4806 1 12.9115 1.09988 12.3981 1.354C12.0037 1.54919 11 2.18459 11 3.47401V4.54125ZM14.927 3.96881C14.9218 3.98589 14.9164 4.00272 14.9108 4.0193C14.6118 3.98595 14.308 3.96881 14.0001 3.96881C13.6922 3.96881 13.3883 3.98596 13.0893 4.01933C13.0836 4.00274 13.0782 3.9859 13.073 3.96881H13V3.47401C13 3.20076 13.4473 2.97921 14 2.97921C14.5527 2.97921 15 3.20076 15 3.47401V3.96881H14.927ZM15.9483 23.4906H12.0517C12.2572 24.3674 13.0515 25.0208 14 25.0208C14.9485 25.0208 15.7428 24.3674 15.9483 23.4906ZM8.07706 11.6767C8.07722 8.53096 10.7105 5.94802 14.0001 5.94802C17.2898 5.94802 19.9231 8.53096 19.9232 11.6767H8.07706ZM8.07706 11.6767H19.9232V17.9805C19.9232 18.5121 20.1393 19.0214 20.5229 19.3936L22.7052 21.5114H5.29484L7.77028 19.1091C7.95901 18.9296 8.07706 18.6772 8.07706 18.3958V11.6767Z"
              strokeWidth="2"
              fill="#004596"
              fill-rule="evenodd"
            ></path>
          </g>
        </svg>
      );
    case "Backward":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M3 7V17L12 12L3 7M12 7V17L21 12L12 7"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Cancel":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <g>
              {" "}
              <path
                d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                stroke="#004596"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      );
    case "Cycle":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <rect
              width="48"
              height="48"
              transform="matrix(-1 0 0 1 48 0)"
              fill="white"
              fill-opacity="0.01"
            ></rect>{" "}
            <path
              d="M14 6.67578C8.02198 10.1339 4 16.5973 4 24.0001M14 6.67578V14.0001M14 6.67578H6.67564"
              stroke="#004596"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M6.67564 34C10.1337 39.978 16.5972 44 24 44M6.67564 34H14M6.67564 34V41.3244"
              stroke="#004596"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M34 41.3244C39.978 37.8663 44 31.4028 44 24M34 41.3244V34M34 41.3244H41.3244"
              stroke="#004596"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M41.3243 14C37.8662 8.02199 31.4028 4 24 4M41.3243 14H34M41.3243 14V6.67564"
              stroke="#004596"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      );
    case "Delete":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M10 12V17"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M14 12V17"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M4 7H20"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Document":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              id="Vector"
              d="M9 17H15M9 14H15M13.0004 3.00087C12.9048 3 12.7974 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20302 18.9999 9.09553 18.999 9M13.0004 3.00087C13.2858 3.00348 13.4657 3.01407 13.6382 3.05547C13.8423 3.10446 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59181 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53379 18.9964 8.71454 18.999 9M13.0004 3.00087L13 5.80021C13 6.92031 13 7.48015 13.218 7.90797C13.4097 8.2843 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.999"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Down":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <g>
              {" "}
              <path
                d="M9 13L12 16M12 16L15 13M12 16V8M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
                stroke="#004596"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      );
    case "Download":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Edit":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              id="Vector"
              d="M10.0002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2839 19.7822 18.9076C20 18.4802 20 17.921 20 16.8031V14M16 5L10 11V14H13L19 8M16 5L19 2L22 5L19 8M16 5L19 8"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Erase":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M11.6066 6.53552L3.82843 14.3137C3.04738 15.0947 3.04738 16.3611 3.82843 17.1421L5.36396 18.6777C5.73904 19.0527 6.24774 19.2634 6.77818 19.2634H13.0208M11.6066 6.53552L13.7279 4.4142C14.509 3.63315 15.7753 3.63315 16.5564 4.4142L20.799 8.65684C21.58 9.43789 21.58 10.7042 20.799 11.4853L18.6777 13.6066M11.6066 6.53552L18.6777 13.6066M18.6777 13.6066L13.0208 19.2634M13.0208 19.2634H20"
              stroke="#004596"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </g>
        </svg>
      );
    case "Excel":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M28.781,4.405H18.651V2.018L2,4.588V27.115l16.651,2.868V26.445H28.781A1.162,1.162,0,0,0,30,25.349V5.5A1.162,1.162,0,0,0,28.781,4.405Zm.16,21.126H18.617L18.6,23.642h2.487v-2.2H18.581l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2H28.941Z"
              style={{ fill: "#20744a", fillRule: "evenodd" }}
            ></path>
            <rect
              x="22.487"
              y="7.439"
              width="4.323"
              height="2.2"
              style={{ fill: "#20744a" }}
            ></rect>
            <rect
              x="22.487"
              y="10.94"
              width="4.323"
              height="2.2"
              style={{ fill: "#20744a" }}
            ></rect>
            <rect
              x="22.487"
              y="14.441"
              width="4.323"
              height="2.2"
              style={{ fill: "#20744a" }}
            ></rect>
            <rect
              x="22.487"
              y="17.942"
              width="4.323"
              height="2.2"
              style={{ fill: "#20744a" }}
            ></rect>
            <rect
              x="22.487"
              y="21.443"
              width="4.323"
              height="2.2"
              style={{ fill: "#20744a" }}
            ></rect>
            <polygon
              points="6.347 10.673 8.493 10.55 9.842 14.259 11.436 10.397 13.582 10.274 10.976 15.54 13.582 20.819 11.313 20.666 9.781 16.642 8.248 20.513 6.163 20.329 8.585 15.666 6.347 10.673"
              style={{ fill: "#ffffff", fillRule: "evenodd" }}
            ></polygon>
          </g>
        </svg>
      );
    case "Filter":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              id="Vector"
              d="M20 5.6001C20 5.04005 19.9996 4.75981 19.8906 4.5459C19.7948 4.35774 19.6423 4.20487 19.4542 4.10899C19.2403 4 18.9597 4 18.3996 4H5.59961C5.03956 4 4.75981 4 4.5459 4.10899C4.35774 4.20487 4.20487 4.35774 4.10899 4.5459C4 4.75981 4 5.04005 4 5.6001V6.33736C4 6.58195 4 6.70433 4.02763 6.81942C4.05213 6.92146 4.09263 7.01893 4.14746 7.1084C4.20928 7.20928 4.29591 7.29591 4.46875 7.46875L9.53149 12.5315C9.70443 12.7044 9.79044 12.7904 9.85228 12.8914C9.90711 12.9808 9.94816 13.0786 9.97266 13.1807C10 13.2946 10 13.4155 10 13.6552V18.411C10 19.2682 10 19.6971 10.1805 19.9552C10.3382 20.1806 10.5814 20.331 10.8535 20.3712C11.1651 20.4172 11.5487 20.2257 12.3154 19.8424L13.1154 19.4424C13.4365 19.2819 13.5966 19.2013 13.7139 19.0815C13.8176 18.9756 13.897 18.8485 13.9453 18.7084C14 18.5499 14 18.37 14 18.011V13.6626C14 13.418 14 13.2958 14.0276 13.1807C14.0521 13.0786 14.0926 12.9808 14.1475 12.8914C14.2089 12.7911 14.2947 12.7053 14.4653 12.5347L14.4688 12.5315L19.5315 7.46875C19.7044 7.2958 19.7904 7.20932 19.8523 7.1084C19.9071 7.01893 19.9482 6.92146 19.9727 6.81942C20 6.70551 20 6.58444 20 6.3448V5.6001Z"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Forward":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M21 7V17L12 12L21 7M12 7V17L3 12L12 7"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Git":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.4142 3.82843C12.6332 3.04738 11.3668 3.04738 10.5858 3.82843L9.91421 4.5L11.482 6.06774C11.6472 6.02356 11.8208 6 12 6C13.1046 6 14 6.89543 14 8C14 8.17916 13.9764 8.35282 13.9323 8.51804L15.982 10.5677C16.1472 10.5236 16.3208 10.5 16.5 10.5C17.6046 10.5 18.5 11.3954 18.5 12.5C18.5 13.6046 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 13.6046 14.5 12.5C14.5 12.3208 14.5236 12.1472 14.5677 11.982L13 10.4142V15.2676C13.5978 15.6134 14 16.2597 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 16.2597 10.4022 15.6134 11 15.2676V9.73244C10.4022 9.38663 10 8.74028 10 8C10 7.82084 10.0236 7.64718 10.0677 7.48196L8.5 5.91421L3.82843 10.5858C3.04738 11.3668 3.04738 12.6332 3.82843 13.4142L10.5858 20.1716C11.3668 20.9526 12.6332 20.9526 13.4142 20.1716L20.1716 13.4142C20.9526 12.6332 20.9526 11.3668 20.1716 10.5858L13.4142 3.82843ZM9.17157 2.41421C10.7337 0.852115 13.2663 0.852119 14.8284 2.41422L21.5858 9.17157C23.1479 10.7337 23.1479 13.2663 21.5858 14.8284L14.8284 21.5858C13.2663 23.1479 10.7337 23.1479 9.17157 21.5858L2.41421 14.8284C0.852115 13.2663 0.852119 10.7337 2.41422 9.17157L9.17157 2.41421Z"
              fill="#004596"
            ></path>{" "}
          </g>
        </svg>
      );
    case "Left":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <g>
              {" "}
              <path
                d="M11 9L8 12M8 12L11 15M8 12H16M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
                stroke="#004596"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      );
    case "List":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          preserveaspectratio="xMidYMid meet"
          fill="#004596"
          stroke="#004596"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M38.301 7.752c-8.653 2.487-17.307 4.976-25.96 7.462a25.93 25.93 0 0 1 1.304 2.116c8.562-2.635 17.125-5.27 25.688-7.903c-.316-.572-.66-1.13-1.032-1.675"
              fill="#004596"
            ></path>
            <path
              d="M40.8 12.624l-25.299 8.75c.293.773.56 1.558.806 2.353c8.376-3.082 16.755-6.161 25.13-9.241a33.413 33.413 0 0 0-.637-1.862"
              fill="#004596"
            ></path>
            <path
              d="M17.459 28.101c.189.821.361 1.65.527 2.482L42.738 19.92a88.699 88.699 0 0 0-.416-1.964c-8.289 3.382-16.574 6.764-24.863 10.145"
              fill="#004596"
            ></path>
            <path
              d="M61.228 33.155c-2.256-2.472-3.539-5.399-4.419-8.518c-2.727 1.543-5.308 3.003-7.747 4.385C46.392 19.556 47.121 8.488 38.121 2L2 10.253c15.272 11.005 11.144 39.508 22.041 50.212c.911.895 4.324 2.588 9.068.628c7.352-3.038 4.657-6.484 27.185-22.907c1.987-1.45 2.156-3.67.934-5.031M24.701 42.81c1.234 4.375 9.551 6.745 8.115 13.259c-.872 3.961-5.77 4.762-7.461 3.064c-4.45-4.466-6.291-12.502-8.191-21.061c-2.199-9.904-4.463-20.106-11.129-26.824l31.65-7.23c5.485 4.371 6.664 10.884 7.909 17.765c.491 2.715 1.014 5.497 1.804 8.182L24.701 42.81"
              fill="#004596"
            ></path>
          </g>
        </svg>
      );
    case "Login":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M20 12L9 12M9 12L11.5 14.5M9 12L11.5 9.5"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Logout":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Menu":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M2 6H22M2 13H22M12 20H22"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M2 18H9L5 22L2 18"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Move":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <g>
              {" "}
              <path
                d="M12 21V12M12 21L15 18M12 21L9 18M12 12V3M12 12H3M12 12H21M12 3L9 6M12 3L15 6M3 12L6 15M3 12L6 9M21 12L18 9M21 12L18 15"
                stroke="#004596"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      );
    case "Next":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M18 7V17L9 12L18 7M7 7V17"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "NoFilter":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              id="Vector"
              d="M13 4H18.4C18.9601 4 19.2409 4 19.4548 4.10899C19.6429 4.20487 19.7948 4.35774 19.8906 4.5459C19.9996 4.75981 20 5.04005 20 5.6001V6.3448C20 6.58444 20 6.70551 19.9727 6.81942C19.9482 6.92146 19.9072 7.01893 19.8524 7.1084C19.7906 7.20931 19.7043 7.2958 19.5314 7.46875L18 9.00012M7.49961 4H5.59961C5.03956 4 4.75981 4 4.5459 4.10899C4.35774 4.20487 4.20487 4.35774 4.10899 4.5459C4 4.75981 4 5.04005 4 5.6001V6.33736C4 6.58195 4 6.70433 4.02763 6.81942C4.05213 6.92146 4.09263 7.01893 4.14746 7.1084C4.20928 7.20928 4.29591 7.29591 4.46875 7.46875L9.53149 12.5315C9.70443 12.7044 9.79044 12.7904 9.85228 12.8914C9.90711 12.9808 9.94816 13.0786 9.97266 13.1807C10 13.2946 10 13.4155 10 13.6552V18.411C10 19.2682 10 19.6971 10.1805 19.9552C10.3382 20.1806 10.5814 20.331 10.8535 20.3712C11.1651 20.4172 11.5487 20.2257 12.3154 19.8424L13.1154 19.4424C13.4365 19.2819 13.5966 19.2013 13.7139 19.0815C13.8176 18.9756 13.897 18.8485 13.9453 18.7083C14 18.5499 14 18.37 14 18.011V13.6626C14 13.418 14 13.2958 14.0276 13.1807C14.0521 13.0786 14.0926 12.9809 14.1475 12.8915C14.2091 12.7909 14.2952 12.7048 14.4669 12.5331L14.4688 12.5314L15.5001 11.5001M15.5001 11.5001L5 1M15.5001 11.5001L19 15"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Ok":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <g>
              {" "}
              <path
                d="M15 10L11 14L9 12M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                stroke="#004596"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      );
    case "PDF":
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="24px"
          height="24px"
          fill="#000000"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <g>
              {" "}
              <polygon
                style={{ fill: "#B12A27" }}
                points="475.435,117.825 475.435,512 47.791,512 47.791,0.002 357.613,0.002 412.491,54.881 "
              ></polygon>{" "}
              <rect
                x="36.565"
                y="34.295"
                style={{ fill: "#F2F2F2" }}
                width="205.097"
                height="91.768"
              ></rect>{" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path
                    style={{ fill: "#B12A27" }}
                    d="M110.132,64.379c-0.905-2.186-2.111-4.146-3.769-5.804c-1.658-1.658-3.694-3.015-6.031-3.92 c-2.412-0.98-5.126-1.432-8.141-1.432H69.651v58.195h11.383V89.481h11.157c3.015,0,5.729-0.452,8.141-1.432 c2.337-0.905,4.372-2.261,6.031-3.92c1.659-1.658,2.865-3.543,3.769-5.804c0.829-2.186,1.282-4.523,1.282-6.935 C111.413,68.902,110.961,66.565,110.132,64.379z M97.844,77.118c-1.508,1.432-3.618,2.186-6.181,2.186H81.034V63.323h10.629 c2.563,0,4.674,0.754,6.181,2.261c1.432,1.432,2.186,3.392,2.186,5.804C100.031,73.726,99.277,75.686,97.844,77.118z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#B12A27" }}
                    d="M164.558,75.761c-0.075-2.035-0.151-3.844-0.377-5.503c-0.226-1.659-0.603-3.166-1.131-4.598 c-0.528-1.357-1.206-2.714-2.111-3.92c-2.035-2.94-4.523-5.126-7.312-6.483c-2.865-1.357-6.257-2.035-10.252-2.035h-20.956 v58.195h20.956c3.995,0,7.387-0.678,10.252-2.035c2.789-1.357,5.277-3.543,7.312-6.483c0.905-1.206,1.583-2.563,2.111-3.92 c0.528-1.432,0.905-2.94,1.131-4.598c0.226-1.658,0.301-3.468,0.377-5.503c0.075-1.96,0.075-4.146,0.075-6.558 C164.633,79.908,164.633,77.721,164.558,75.761z M153.175,88.2c0,1.734-0.151,3.091-0.302,4.297 c-0.151,1.131-0.377,2.186-0.678,2.94c-0.301,0.829-0.754,1.583-1.281,2.261c-1.885,2.412-4.749,3.543-8.518,3.543h-8.669V63.323 h8.669c3.769,0,6.634,1.206,8.518,3.618c0.528,0.678,0.98,1.357,1.281,2.186s0.528,1.809,0.678,3.015 c0.151,1.131,0.302,2.563,0.302,4.221c0.075,1.659,0.075,3.694,0.075,5.955C153.251,84.581,153.251,86.541,153.175,88.2z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#B12A27" }}
                    d="M213.18,63.323V53.222h-38.37v58.195h11.383V87.823h22.992V77.646h-22.992V63.323H213.18z"
                  ></path>{" "}
                </g>{" "}
                <g>
                  {" "}
                  <path
                    style={{ fill: "#B12A27" }}
                    d="M110.132,64.379c-0.905-2.186-2.111-4.146-3.769-5.804c-1.658-1.658-3.694-3.015-6.031-3.92 c-2.412-0.98-5.126-1.432-8.141-1.432H69.651v58.195h11.383V89.481h11.157c3.015,0,5.729-0.452,8.141-1.432 c2.337-0.905,4.372-2.261,6.031-3.92c1.659-1.658,2.865-3.543,3.769-5.804c0.829-2.186,1.282-4.523,1.282-6.935 C111.413,68.902,110.961,66.565,110.132,64.379z M97.844,77.118c-1.508,1.432-3.618,2.186-6.181,2.186H81.034V63.323h10.629 c2.563,0,4.674,0.754,6.181,2.261c1.432,1.432,2.186,3.392,2.186,5.804C100.031,73.726,99.277,75.686,97.844,77.118z"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
              <polygon
                style={{ opacity: "0.08", fill: "#040000" }}
                points="475.435,117.825 475.435,512 47.791,512 47.791,419.581 247.705,219.667 259.54,207.832 266.098,201.273 277.029,190.343 289.995,177.377 412.491,54.881 "
              ></polygon>{" "}
              <polygon
                style={{ fill: "#771B1B" }}
                points="475.435,117.836 357.599,117.836 357.599,0 "
              ></polygon>{" "}
              <g>
                {" "}
                <path
                  style={{ fill: "#F2F2F2" }}
                  d="M414.376,370.658c-2.488-4.372-5.88-8.518-10.101-12.287c-3.467-3.166-7.538-6.106-12.137-8.82 c-18.544-10.93-45.003-16.207-80.961-16.207h-3.618c-1.96-1.809-3.995-3.618-6.106-5.503 c-13.644-12.287-24.499-25.63-32.942-40.48c16.584-36.561,24.499-69.126,23.519-96.867c-0.151-4.674-0.829-9.046-2.035-13.117 c-1.809-6.558-4.824-12.363-9.046-17.112c-0.075-0.075-0.075-0.075-0.151-0.151c-6.709-7.538-16.056-11.835-25.555-11.835 c-9.574,0-18.393,4.146-24.801,11.76c-6.332,7.538-9.724,17.866-9.875,30.002c-0.226,18.544,1.281,36.108,4.448,52.315 c0.301,1.282,0.528,2.563,0.829,3.844c3.166,14.7,7.84,28.645,13.87,41.611c-7.086,14.398-14.247,26.836-19.223,35.279 c-3.769,6.408-7.915,13.117-12.212,19.826c-19.373,3.468-35.807,7.689-50.129,12.966c-19.373,7.011-34.902,16.056-46.059,26.836 c-7.237,6.935-12.137,14.323-14.549,22.012c-2.563,7.915-2.412,15.83,0.452,22.916c2.638,6.558,7.387,12.061,13.72,15.83 c1.508,0.905,3.091,1.658,4.749,2.337c4.825,1.96,10.101,3.015,15.604,3.015c12.74,0,25.856-5.503,36.937-15.378 c20.655-18.469,41.988-48.169,54.577-66.94c10.327-1.583,21.559-2.94,34.224-4.297c14.926-1.508,28.118-2.412,40.104-2.865 c3.694,3.317,7.237,6.483,10.629,9.498c18.846,16.81,33.168,28.947,46.134,37.465c0,0.075,0.075,0.075,0.151,0.075 c5.126,3.392,10.026,6.181,14.926,8.443c5.503,2.563,11.081,3.92,16.81,3.92c7.237,0,14.021-2.186,19.675-6.181 c5.729-4.146,9.875-10.101,11.76-16.81C420.18,387.694,418.899,378.724,414.376,370.658z M247.705,219.667 c-1.055-9.348-1.508-19.072-1.357-29.324c0.151-9.724,3.694-16.283,8.895-16.283c3.92,0,8.066,3.543,9.95,10.327 c0.528,2.035,0.905,4.372,0.98,7.01c0.151,3.166,0.075,6.483-0.075,9.875c-0.452,9.574-2.111,19.75-4.975,30.681 c-1.734,7.011-3.995,14.323-6.784,21.936C251.173,243.186,248.911,231.803,247.705,219.667z M121.967,418.073 c-1.282-3.166,0.151-9.272,7.991-16.81c11.986-11.458,30.756-20.504,56.914-27.364c-4.975,6.784-9.875,12.966-14.624,18.619 c-7.237,8.744-14.172,16.132-20.429,21.71c-5.352,4.824-11.232,7.84-16.81,8.594c-0.98,0.151-1.96,0.226-2.94,0.226 C127.168,423.049,123.173,421.089,121.967,418.073z M242.428,337.942l0.528-0.829l-0.829,0.151 c0.151-0.377,0.377-0.754,0.603-1.055c3.166-5.352,7.161-12.212,11.458-20.127l0.377,0.829l0.98-2.035 c3.166,4.523,6.634,8.971,10.252,13.267c1.734,2.035,3.543,3.995,5.352,5.955l-1.206,0.075l1.055,0.98 c-3.091,0.226-6.332,0.528-9.574,0.829c-2.035,0.226-4.146,0.377-6.257,0.603C250.796,337.037,246.499,337.49,242.428,337.942z M369.297,384.98c-8.971-5.729-18.996-13.795-31.359-24.575c17.564,1.809,31.359,5.654,41.159,11.383 c4.297,2.488,7.538,5.051,9.724,7.538c3.618,3.844,4.9,7.312,4.221,9.649c-0.603,2.337-3.241,3.92-6.483,3.92 c-1.885,0-3.844-0.452-5.88-1.432c-3.468-1.658-7.086-3.694-10.93-6.181C369.598,385.282,369.448,385.131,369.297,384.98z"
                ></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      );
    case "Phone":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <g>
              {" "}
              <path
                d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z"
                stroke="#004596"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      );
    case "PhoneBook":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="-4 -4 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M-1 -1V29H27V-1H-1M24 5H30M24 23H30"
              stroke="#004596"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "PowerBI":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              fill="#f5d85a"
              d="M13.501 16h-7.498c0 0-0 0-0 0-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 12.496c0 0 0 0 0 0 0 0.69 0.559 1.25 1.25 1.25 0 0 0 0 0 0h8.747v-13.746c0-0.69-0.559-1.25-1.25-1.25v0z"
            ></path>
            <path
              fill="#eaba3b"
              d="M19.749 8.502h-7.498c0 0-0 0-0 0-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 5.623h2.499c1.035 0.001 1.873 0.84 1.874 1.874v13.746h5.623v-21.244c0-0.69-0.559-1.25-1.25-1.25v0z"
            ></path>
            <path
              fill="#cc8509"
              d="M27.247 2.254v27.492c0 0 0 0 0 0 0 0.69-0.559 1.25-1.25 1.25 0 0-0 0-0 0h-4.374v-21.244c-0.001-1.035-0.84-1.873-1.874-1.874h-2.499v-5.623c0-0 0-0 0-0 0-0.69 0.559-1.25 1.25-1.25h7.498c0.69 0 1.25 0.559 1.25 1.25 0 0 0 0 0 0v0z"
            ></path>
          </g>
        </svg>
      );
    case "Previous":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M6 7V17L15 12L6 7M17 7V17"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Refresh":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <g>
              {" "}
              <path
                id="Vector"
                d="M10 16H5V21M14 8H19V3M4.58301 9.0034C5.14369 7.61566 6.08244 6.41304 7.29255 5.53223C8.50266 4.65141 9.93686 4.12752 11.4298 4.02051C12.9227 3.9135 14.4147 4.2274 15.7381 4.92661C17.0615 5.62582 18.1612 6.68254 18.9141 7.97612M19.4176 14.9971C18.8569 16.3848 17.9181 17.5874 16.708 18.4682C15.4979 19.3491 14.0652 19.8723 12.5723 19.9793C11.0794 20.0863 9.58606 19.7725 8.2627 19.0732C6.93933 18.374 5.83882 17.3175 5.08594 16.0239"
                stroke="#004596"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      );
    case "Report":
      return (
        <svg
          version="1.1"
          id="Uploaded to svgrepo.com"
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 32 32"
          fill="#004596"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <path
              className="linesandangles_een"
              d="M24,7V5H4v18c0,2.209,1.791,4,4,4h16c2.209,0,4-1.791,4-4V7H24z M26,23c0,1.105-0.895,2-2,2H8 c-1.105,0-2-0.895-2-2V7h16v16h2V9h2V23z M14,9H8v6h6V9z M12,13h-2v-2h2V13z M16,9h4v2h-4V9z M16,13h4v2h-4V13z M8,17h12v2H8V17z M8,21h12v2H8V21z"
            ></path>{" "}
          </g>
        </svg>
      );
    case "Return":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M14 9V4L22 12L14 20V15C6 16 6 17 2 20M14 9C6 9 3 16 2 20"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Review":
      return (
        <svg
          fill="#004596"
          height="24px"
          width="24px"
          version="1.2"
          baseprofile="tiny"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          stroke="#004596"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <path d="M172.4,130.6l-26.1,6.9v-12.8l26.1-7V130.6z M172.4,140.4l-26.1,7v12.8l26.1-7V140.4z M209.7,107.4l-27.7,7.5v23v12.8 l27.7-7.4V107.4z M209.7,153.6l-63.4,16.7v12.9l63.4-16.8V153.6z M209.7,189v-12.9L146.3,193v12.8L209.7,189z M46.2,107.4v12.9 l63.4,16.4v-12.8L46.2,107.4z M46.2,142.9l63.4,16.5v-12.8l-63.4-16.5V142.9z M46.2,165.6l63.4,16.8v-12.9l-63.4-16.7V165.6z M46.2,188.3l63.4,16.7v-12.8l-63.4-16.8V188.3z M256,139.5c0,10-8.1,18-18,18H236v52.2c0,1.4-0.9,2.6-2.2,2.9l-43,11.4v31H65.4V224 l-43.1-11.4c-1.3-0.3-2.2-1.5-2.2-2.9v-52.2h-2c-10,0-18-8.1-18-18s8.1-18,18-18h2V71.6c0-0.9,0.4-1.8,1.2-2.4 c0.7-0.6,1.7-0.8,2.6-0.5l104.4,27.6l104.1-27.6c0.9-0.2,1.9,0,2.6,0.5s1.2,1.4,1.2,2.4v49.8h1.9C247.9,121.4,256,129.5,256,139.5z M122.5,111L35.9,88.1V200l86.6,22.9V111z M220.4,88.1L134,111v111.8l86.4-22.8V88.1z M128,86.8c21.4,0,38.7-17.3,38.7-38.7 c0-21.4-17.3-38.7-38.7-38.7c-21.4,0-38.7,17.3-38.7,38.7C89.3,69.5,106.6,86.8,128,86.8z"></path>{" "}
          </g>
        </svg>
      );
    case "Right":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <g>
              {" "}
              <path
                d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
                stroke="#004596"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      );
    case "Save":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              id="Vector"
              d="M17 21.0002L7 21M17 21.0002L17.8031 21C18.921 21 19.48 21 19.9074 20.7822C20.2837 20.5905 20.5905 20.2843 20.7822 19.908C21 19.4806 21 18.921 21 17.8031V9.21955C21 8.77072 21 8.54521 20.9521 8.33105C20.9095 8.14 20.8393 7.95652 20.7432 7.78595C20.6366 7.59674 20.487 7.43055 20.1929 7.10378L17.4377 4.04241C17.0969 3.66374 16.9242 3.47181 16.7168 3.33398C16.5303 3.21 16.3242 3.11858 16.1073 3.06287C15.8625 3 15.5998 3 15.075 3H6.2002C5.08009 3 4.51962 3 4.0918 3.21799C3.71547 3.40973 3.40973 3.71547 3.21799 4.0918C3 4.51962 3 5.08009 3 6.2002V17.8002C3 18.9203 3 19.4796 3.21799 19.9074C3.40973 20.2837 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H7M17 21.0002V17.1969C17 16.079 17 15.5192 16.7822 15.0918C16.5905 14.7155 16.2837 14.4097 15.9074 14.218C15.4796 14 14.9203 14 13.8002 14H10.2002C9.08009 14 8.51962 14 8.0918 14.218C7.71547 14.4097 7.40973 14.7155 7.21799 15.0918C7 15.5196 7 16.0801 7 17.2002V21M15 7H9"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Search":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <path
              id="Vector"
              d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Select":
      return (
        <svg
          fill="#004596"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"></path>
            <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm8.933 3.519-1.726-1.726-1.414 1.414 3.274 3.274 5.702-6.84-1.538-1.282z"></path>
          </g>
        </svg>
      );
    case "Send":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M8 62L92 8L84 92L8 62M45 80V92L51 82"
              stroke="#004596"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M47 75L78 30"
              stroke="#004596"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Setting":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M20.3499 8.92293L19.9837 8.7192C19.9269 8.68756 19.8989 8.67169 19.8714 8.65524C19.5983 8.49165 19.3682 8.26564 19.2002 7.99523C19.1833 7.96802 19.1674 7.93949 19.1348 7.8831C19.1023 7.82677 19.0858 7.79823 19.0706 7.76998C18.92 7.48866 18.8385 7.17515 18.8336 6.85606C18.8331 6.82398 18.8332 6.79121 18.8343 6.72604L18.8415 6.30078C18.8529 5.62025 18.8587 5.27894 18.763 4.97262C18.6781 4.70053 18.536 4.44993 18.3462 4.23725C18.1317 3.99685 17.8347 3.82534 17.2402 3.48276L16.7464 3.1982C16.1536 2.85658 15.8571 2.68571 15.5423 2.62057C15.2639 2.56294 14.9765 2.56561 14.6991 2.62789C14.3859 2.69819 14.0931 2.87351 13.5079 3.22396L13.5045 3.22555L13.1507 3.43741C13.0948 3.47091 13.0665 3.48779 13.0384 3.50338C12.7601 3.6581 12.4495 3.74365 12.1312 3.75387C12.0992 3.7549 12.0665 3.7549 12.0013 3.7549C11.9365 3.7549 11.9024 3.7549 11.8704 3.75387C11.5515 3.74361 11.2402 3.65759 10.9615 3.50224C10.9334 3.48658 10.9056 3.46956 10.8496 3.4359L10.4935 3.22213C9.90422 2.86836 9.60915 2.69121 9.29427 2.62057C9.0157 2.55807 8.72737 2.55634 8.44791 2.61471C8.13236 2.68062 7.83577 2.85276 7.24258 3.19703L7.23994 3.1982L6.75228 3.48124L6.74688 3.48454C6.15904 3.82572 5.86441 3.99672 5.6517 4.23614C5.46294 4.4486 5.32185 4.69881 5.2374 4.97018C5.14194 5.27691 5.14703 5.61896 5.15853 6.3027L5.16568 6.72736C5.16676 6.79166 5.16864 6.82362 5.16817 6.85525C5.16343 7.17499 5.08086 7.48914 4.92974 7.77096C4.9148 7.79883 4.8987 7.8267 4.86654 7.88237C4.83436 7.93809 4.81877 7.96579 4.80209 7.99268C4.63336 8.26452 4.40214 8.49186 4.12733 8.65572C4.10015 8.67193 4.0715 8.68752 4.01521 8.71871L3.65365 8.91908C3.05208 9.25245 2.75137 9.41928 2.53256 9.65669C2.33898 9.86672 2.19275 10.1158 2.10349 10.3872C2.00259 10.6939 2.00267 11.0378 2.00424 11.7255L2.00551 12.2877C2.00706 12.9708 2.00919 13.3122 2.11032 13.6168C2.19979 13.8863 2.34495 14.134 2.53744 14.3427C2.75502 14.5787 3.05274 14.7445 3.64974 15.0766L4.00808 15.276C4.06907 15.3099 4.09976 15.3266 4.12917 15.3444C4.40148 15.5083 4.63089 15.735 4.79818 16.0053C4.81625 16.0345 4.8336 16.0648 4.8683 16.1255C4.90256 16.1853 4.92009 16.2152 4.93594 16.2452C5.08261 16.5229 5.16114 16.8315 5.16649 17.1455C5.16707 17.1794 5.16658 17.2137 5.16541 17.2827L5.15853 17.6902C5.14695 18.3763 5.1419 18.7197 5.23792 19.0273C5.32287 19.2994 5.46484 19.55 5.65463 19.7627C5.86915 20.0031 6.16655 20.1745 6.76107 20.5171L7.25478 20.8015C7.84763 21.1432 8.14395 21.3138 8.45869 21.379C8.73714 21.4366 9.02464 21.4344 9.30209 21.3721C9.61567 21.3017 9.90948 21.1258 10.4964 20.7743L10.8502 20.5625C10.9062 20.5289 10.9346 20.5121 10.9626 20.4965C11.2409 20.3418 11.5512 20.2558 11.8695 20.2456C11.9015 20.2446 11.9342 20.2446 11.9994 20.2446C12.0648 20.2446 12.0974 20.2446 12.1295 20.2456C12.4484 20.2559 12.7607 20.3422 13.0394 20.4975C13.0639 20.5112 13.0885 20.526 13.1316 20.5519L13.5078 20.7777C14.0971 21.1315 14.3916 21.3081 14.7065 21.3788C14.985 21.4413 15.2736 21.4438 15.5531 21.3855C15.8685 21.3196 16.1657 21.1471 16.7586 20.803L17.2536 20.5157C17.8418 20.1743 18.1367 20.0031 18.3495 19.7636C18.5383 19.5512 18.6796 19.3011 18.764 19.0297C18.8588 18.7252 18.8531 18.3858 18.8417 17.7119L18.8343 17.2724C18.8332 17.2081 18.8331 17.1761 18.8336 17.1445C18.8383 16.8247 18.9195 16.5104 19.0706 16.2286C19.0856 16.2007 19.1018 16.1726 19.1338 16.1171C19.166 16.0615 19.1827 16.0337 19.1994 16.0068C19.3681 15.7349 19.5995 15.5074 19.8744 15.3435C19.9012 15.3275 19.9289 15.3122 19.9838 15.2818L19.9857 15.2809L20.3472 15.0805C20.9488 14.7472 21.2501 14.5801 21.4689 14.3427C21.6625 14.1327 21.8085 13.8839 21.8978 13.6126C21.9981 13.3077 21.9973 12.9658 21.9958 12.2861L21.9945 11.7119C21.9929 11.0287 21.9921 10.6874 21.891 10.3828C21.8015 10.1133 21.6555 9.86561 21.463 9.65685C21.2457 9.42111 20.9475 9.25526 20.3517 8.92378L20.3499 8.92293Z"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M8.00033 12C8.00033 14.2091 9.79119 16 12.0003 16C14.2095 16 16.0003 14.2091 16.0003 12C16.0003 9.79082 14.2095 7.99996 12.0003 7.99996C9.79119 7.99996 8.00033 9.79082 8.00033 12Z"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Show":
      return (
        <svg
          height="24px"
          width="24px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 511.999 511.999"
          fill="none"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              style={{ fill: "#004596" }}
              d="M255.999,426.059c-58.135,0-120.528-28.211-180.434-81.584 c-44.524-39.668-71.926-78.859-73.07-80.509c-3.326-4.79-3.326-11.141,0-15.931c1.144-1.65,28.546-40.84,73.072-80.509 C135.473,114.154,197.865,85.941,256,85.941c38.633,0,78.631,12.107,118.882,35.983c79.124,46.936,132.393,122.898,134.622,126.11 c4.399,6.338,2.827,15.042-3.509,19.44c-6.338,4.397-15.043,2.83-19.442-3.509c-0.508-0.732-52.166-74.261-125.924-118.013 c-35.88-21.283-71.081-32.074-104.63-32.074c-107.992,0-200.798,111.051-224.637,142.114 C55.229,287.035,148.191,398.121,256,398.121c64.189,0,122.834-39.976,160.728-73.51c5.777-5.111,14.607-4.572,19.717,1.203 c5.113,5.777,4.573,14.606-1.203,19.718C375.714,398.213,313.732,426.059,255.999,426.059z"
            ></path>{" "}
            <path
              style={{ fill: "#none" }}
              d="M330.079,181.919c-40.913-40.913-107.248-40.913-148.161,0s-40.913,107.248,0,148.161 s107.248,40.913,148.161,0l-74.08-74.08L330.079,181.919z"
            ></path>
            <circle
              cx="256"
              cy="256"
              data-name="Circle"
              fill="#004596"
              r="25"
              stroke="#004596"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="25"
            ></circle>
            <circle
              cx="256"
              cy="256"
              data-name="Circle"
              fill="none"
              r="105"
              stroke="#004596"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="25"
            ></circle>
          </g>
        </svg>
      );
    case "ShowHide":
      return (
        <svg
          height="24px"
          width="24px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 511.999 511.999"
          fill="none"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              style={{ fill: "#004596" }}
              d="M255.999,426.059c-58.135,0-120.528-28.211-180.434-81.584 c-44.524-39.668-71.926-78.859-73.07-80.509c-3.326-4.79-3.326-11.141,0-15.931c1.144-1.65,28.546-40.84,73.072-80.509 C135.473,114.154,197.865,85.941,256,85.941c38.633,0,78.631,12.107,118.882,35.983c79.124,46.936,132.393,122.898,134.622,126.11 c4.399,6.338,2.827,15.042-3.509,19.44c-6.338,4.397-15.043,2.83-19.442-3.509c-0.508-0.732-52.166-74.261-125.924-118.013 c-35.88-21.283-71.081-32.074-104.63-32.074c-107.992,0-200.798,111.051-224.637,142.114 C55.229,287.035,148.191,398.121,256,398.121c64.189,0,122.834-39.976,160.728-73.51c5.777-5.111,14.607-4.572,19.717,1.203 c5.113,5.777,4.573,14.606-1.203,19.718C375.714,398.213,313.732,426.059,255.999,426.059z"
            ></path>{" "}
            <path
              style={{ fill: "#none" }}
              d="M330.079,181.919c-40.913-40.913-107.248-40.913-148.161,0s-40.913,107.248,0,148.161 s107.248,40.913,148.161,0l-74.08-74.08L330.079,181.919z"
            ></path>
            <circle
              cx="256"
              cy="256"
              data-name="Circle"
              fill="#004596"
              r="25"
              stroke="#004596"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="25"
            ></circle>
            <circle
              cx="256"
              cy="256"
              data-name="Circle"
              fill="none"
              r="105"
              stroke="#004596"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="25"
            ></circle>
            <path
              d="M450 62L62 450"
              stroke="#004596"
              strokeWidth="30"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Syncron":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              id="Vector"
              d="M16 13L19 16M19 16L16 19M19 16H5M8 11L5 8M5 8L8 5M5 8H19"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Tree":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M18 2H22V6H18V2M2 4H15M20 6V20H17M20 12H17 M12 10H16V14H12V10 M12 18H16V22H12V18 M2 12H9M2 20H9"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Up":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            {" "}
            <g id="Arrow / Arrow_Circle_Up">
              {" "}
              <path
                id="Vector"
                d="M15 11L12 8M12 8L9 11M12 8V16M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
                stroke="#004596"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      );
    case "Upload":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M6 3H18M12 21V7M12 7L17 12M12 7L7 12"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "UseCase":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="24px"
          height="24px"
          viewBox="0 0 200 200"
          fill="none"
          style={{ fillRule: "evenodd" }}
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g>
            <path
              style={{ opacity: "0.911" }}
              fill="#004596"
              d="M 129.5,11.5 C 146.016,9.92897 161.683,12.7623 176.5,20C 189.895,29.5528 190.895,40.2195 179.5,52C 167.44,59.474 154.274,62.974 140,62.5C 125.346,62.9383 111.846,59.2717 99.5,51.5C 91.003,64.8452 82.6697,78.3452 74.5,92C 81.1667,92.6667 87.8333,92.6667 94.5,92C 100.892,83.1296 109.559,77.7963 120.5,76C 131.783,74.4501 143.117,74.1167 154.5,75C 165.303,76.3211 174.803,80.4878 183,87.5C 190.239,98.7525 188.406,108.252 177.5,116C 161.42,124.094 144.42,126.761 126.5,124C 113.212,123.026 102.545,117.359 94.5,107C 87.8333,106.333 81.1667,106.333 74.5,107C 82.6697,120.655 91.003,134.155 99.5,147.5C 117.546,137.039 136.88,133.873 157.5,138C 167.796,139.731 176.629,144.231 184,151.5C 189.694,161.239 188.194,169.739 179.5,177C 161.187,187.378 141.687,190.212 121,185.5C 110.293,183.82 101.626,178.82 95,170.5C 83.7045,148.577 71.3712,127.244 58,106.5C 55.7552,103.119 55.0885,99.4525 56,95.5C 70.7028,72.7593 84.3695,49.4259 97,25.5C 100.619,21.8845 104.786,19.0512 109.5,17C 116.118,14.5152 122.785,12.6818 129.5,11.5 Z M 128.5,25.5 C 138.224,25.1411 147.891,25.6411 157.5,27C 162.892,28.5297 167.892,30.863 172.5,34C 173.554,35.3876 173.72,36.8876 173,38.5C 167.305,43.9285 160.471,47.0951 152.5,48C 141.376,49.0785 130.376,48.4118 119.5,46C 114.62,44.6451 110.453,42.1451 107,38.5C 106.333,37.5 106.333,36.5 107,35.5C 113.212,29.9379 120.378,26.6045 128.5,25.5 Z M 131.5,87.5 C 145.249,86.346 158.249,88.846 170.5,95C 173.087,96.5251 173.92,98.6917 173,101.5C 165.947,107.409 157.78,110.576 148.5,111C 137.17,112.353 126.17,111.02 115.5,107C 112.241,105.789 109.408,103.956 107,101.5C 106.333,100.167 106.333,98.8333 107,97.5C 114.287,91.8138 122.453,88.4804 131.5,87.5 Z M 127.5,150.5 C 137.557,150.135 147.557,150.635 157.5,152C 162.892,153.53 167.892,155.863 172.5,159C 173.554,160.388 173.72,161.888 173,163.5C 167.305,168.928 160.471,172.095 152.5,173C 141.376,174.078 130.376,173.412 119.5,171C 114.62,169.645 110.453,167.145 107,163.5C 106.333,162.5 106.333,161.5 107,160.5C 112.929,155.145 119.762,151.811 127.5,150.5 Z"
            ></path>
          </g>
          <g>
            <path
              style={{ opacity: "0.903" }}
              fill="#004596"
              d="M 27.5,67.5 C 42.411,68.38 46.911,75.7133 41,89.5C 40.0975,90.7014 38.9308,91.5348 37.5,92C 46.8372,90.7031 50.6706,94.5365 49,103.5C 45.6727,106.154 41.8394,107.154 37.5,106.5C 37.3505,107.552 37.5172,108.552 38,109.5C 41.6667,113.167 45.3333,116.833 49,120.5C 51.3715,127.77 48.8715,131.27 41.5,131C 37.4051,128.741 33.7384,125.907 30.5,122.5C 27.3135,125.521 23.9802,128.354 20.5,131C 12.1409,131.13 9.64094,127.296 13,119.5C 17.0156,115.652 20.8489,111.652 24.5,107.5C 20.6984,106.903 17.0318,105.903 13.5,104.5C 11.6048,102.133 11.1048,99.4663 12,96.5C 12.5,94.6667 13.6667,93.5 15.5,93C 18.1667,92.6667 20.8333,92.3333 23.5,92C 14.6413,81.9851 15.9746,73.8185 27.5,67.5 Z"
            ></path>
          </g>
        </svg>
      );
    case "User":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              id="Vector"
              d="M19 21C19 17.134 15.866 14 12 14C8.13401 14 5 17.134 5 21M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "Users":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              id="Vector"
              d="M21 19.9999C21 18.2583 19.3304 16.7767 17 16.2275M15 20C15 17.7909 12.3137 16 9 16C5.68629 16 3 17.7909 3 20M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5M9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9C13 11.2091 11.2091 13 9 13Z"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    case "UsersGroup":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onClick}
          data-tip={datatip}
          data-for={datafor}
          cursor="pointer"
          className={className}
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              id="Vector"
              d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z"
              stroke="#004596"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      );
    default:
      break;
  }
};
export default SvgIcons;
