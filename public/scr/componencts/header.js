const header = document.querySelector('header');
header.innerHTML = `
<div class="wrapper">
            <svg class="header__logo" width="220" height="19" viewBox="0 0 220 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 12.9609C14 13.6562 13.8672 14.3086 13.6016 14.918C13.3359 15.5273 12.9727 16.0625 12.5117 16.5234C12.0586 16.9766 11.5273 17.3359 10.918 17.6016C10.3086 17.8672 9.65625 18 8.96094 18H0.558594V1.19531H8.96094C9.65625 1.19531 10.3086 1.32812 10.918 1.59375C11.5273 1.85938 12.0586 2.22266 12.5117 2.68359C12.9727 3.13672 13.3359 3.66797 13.6016 4.27734C13.8672 4.88672 14 5.53906 14 6.23438C14 6.54688 13.957 6.86719 13.8711 7.19531C13.7852 7.52344 13.6641 7.83984 13.5078 8.14453C13.3516 8.44922 13.1641 8.72656 12.9453 8.97656C12.7266 9.22656 12.4844 9.43359 12.2188 9.59766C12.4922 9.74609 12.7383 9.94922 12.957 10.207C13.1758 10.457 13.3633 10.7344 13.5195 11.0391C13.6758 11.3438 13.793 11.6641 13.8711 12C13.957 12.3281 14 12.6484 14 12.9609ZM3.92188 14.6367H8.96094C9.19531 14.6367 9.41406 14.5938 9.61719 14.5078C9.82031 14.4219 9.99609 14.3047 10.1445 14.1562C10.3008 14 10.4219 13.8203 10.5078 13.6172C10.5938 13.4141 10.6367 13.1953 10.6367 12.9609C10.6367 12.7266 10.5938 12.5078 10.5078 12.3047C10.4219 12.1016 10.3008 11.9258 10.1445 11.7773C9.99609 11.6211 9.82031 11.5 9.61719 11.4141C9.41406 11.3281 9.19531 11.2852 8.96094 11.2852H3.92188V14.6367ZM3.92188 7.92188H8.96094C9.19531 7.92188 9.41406 7.87891 9.61719 7.79297C9.82031 7.70703 9.99609 7.58984 10.1445 7.44141C10.3008 7.28516 10.4219 7.10547 10.5078 6.90234C10.5938 6.69141 10.6367 6.46875 10.6367 6.23438C10.6367 6 10.5938 5.78125 10.5078 5.57812C10.4219 5.375 10.3008 5.19922 10.1445 5.05078C9.99609 4.89453 9.82031 4.77344 9.61719 4.6875C9.41406 4.60156 9.19531 4.55859 8.96094 4.55859H3.92188V7.92188ZM28.4225 18H16.903V1.19531H28.4225V4.55859H20.2663V7.92188H25.7858V11.2852H20.2663V14.6367H28.4225V18ZM38.6966 18H35.345V12.7383C34.6028 12.5508 33.9192 12.25 33.2942 11.8359C32.677 11.4219 32.1458 10.9297 31.7005 10.3594C31.2552 9.78125 30.9075 9.14453 30.6575 8.44922C30.4153 7.74609 30.2942 7.00781 30.2942 6.23438V1.19531H33.6575V6.23438C33.6575 6.69531 33.7434 7.13281 33.9153 7.54688C34.095 7.95312 34.3372 8.30859 34.6419 8.61328C34.9466 8.91797 35.302 9.16016 35.7083 9.33984C36.1223 9.51172 36.5598 9.59766 37.0208 9.59766C37.4817 9.59766 37.9153 9.51172 38.3216 9.33984C38.7356 9.16016 39.095 8.91797 39.3997 8.61328C39.7044 8.30859 39.9427 7.95312 40.1145 7.54688C40.2942 7.13281 40.3841 6.69531 40.3841 6.23438V1.19531H43.7356V6.23438C43.7356 7.00781 43.6106 7.74609 43.3606 8.44922C43.1184 9.14453 42.7747 9.78125 42.3294 10.3594C41.8841 10.9297 41.3528 11.4219 40.7356 11.8359C40.1184 12.25 39.4387 12.5508 38.6966 12.7383V18ZM62.8456 9.66797C62.8456 10.4648 62.7402 11.2344 62.5292 11.9766C62.3261 12.7109 62.037 13.4023 61.662 14.0508C61.287 14.6914 60.8339 15.2773 60.3027 15.8086C59.7714 16.3398 59.1855 16.7969 58.5448 17.1797C57.9042 17.5547 57.2128 17.8438 56.4706 18.0469C55.7284 18.2578 54.9589 18.3633 54.162 18.3633C53.3652 18.3633 52.5956 18.2578 51.8534 18.0469C51.1191 17.8438 50.4277 17.5547 49.7792 17.1797C49.1386 16.7969 48.5527 16.3398 48.0214 15.8086C47.4902 15.2773 47.0331 14.6914 46.6503 14.0508C46.2753 13.4023 45.9823 12.7109 45.7714 11.9766C45.5683 11.2344 45.4667 10.4648 45.4667 9.66797C45.4667 8.87109 45.5683 8.10156 45.7714 7.35938C45.9823 6.61719 46.2753 5.92578 46.6503 5.28516C47.0331 4.64453 47.4902 4.05859 48.0214 3.52734C48.5527 2.99609 49.1386 2.54297 49.7792 2.16797C50.4277 1.79297 51.1191 1.50391 51.8534 1.30078C52.5956 1.08984 53.3652 0.984375 54.162 0.984375C54.9589 0.984375 55.7284 1.08984 56.4706 1.30078C57.2128 1.50391 57.9042 1.79297 58.5448 2.16797C59.1855 2.54297 59.7714 2.99609 60.3027 3.52734C60.8339 4.05859 61.287 4.64453 61.662 5.28516C62.037 5.92578 62.3261 6.61719 62.5292 7.35938C62.7402 8.10156 62.8456 8.87109 62.8456 9.66797ZM59.5058 9.66797C59.5058 8.93359 59.3652 8.24219 59.0839 7.59375C58.8027 6.9375 58.4198 6.37109 57.9355 5.89453C57.4589 5.41016 56.8925 5.02734 56.2363 4.74609C55.5878 4.46484 54.8964 4.32422 54.162 4.32422C53.4198 4.32422 52.7245 4.46484 52.0761 4.74609C51.4277 5.02734 50.8613 5.41016 50.3769 5.89453C49.8925 6.37109 49.5097 6.9375 49.2284 7.59375C48.9472 8.24219 48.8066 8.93359 48.8066 9.66797C48.8066 10.4023 48.9472 11.0938 49.2284 11.7422C49.5097 12.3828 49.8925 12.9453 50.3769 13.4297C50.8613 13.9141 51.4277 14.2969 52.0761 14.5781C52.7245 14.8594 53.4198 15 54.162 15C54.8964 15 55.5878 14.8594 56.2363 14.5781C56.8925 14.2969 57.4589 13.9141 57.9355 13.4297C58.4198 12.9453 58.8027 12.3828 59.0839 11.7422C59.3652 11.0938 59.5058 10.4023 59.5058 9.66797ZM78.8619 18H75.2642L68.7838 6.9375V18H65.4205V1.19531H69.0181L75.4986 12.2695V1.19531H78.8619V18ZM95.8156 9.59766C95.8156 10.3711 95.7141 11.1172 95.5109 11.8359C95.3156 12.5469 95.0344 13.2148 94.6672 13.8398C94.3 14.457 93.8625 15.0234 93.3547 15.5391C92.8469 16.0469 92.2805 16.4844 91.6555 16.8516C91.0305 17.2188 90.3586 17.5039 89.6398 17.707C88.9289 17.9023 88.1867 18 87.4133 18H82.3508V1.19531H87.4133C88.1867 1.19531 88.9289 1.29688 89.6398 1.5C90.3586 1.69531 91.0305 1.97656 91.6555 2.34375C92.2805 2.71094 92.8469 3.15234 93.3547 3.66797C93.8625 4.17578 94.3 4.74219 94.6672 5.36719C95.0344 5.98438 95.3156 6.65234 95.5109 7.37109C95.7141 8.08203 95.8156 8.82422 95.8156 9.59766ZM92.4523 9.59766C92.4523 8.90234 92.3195 8.25 92.0539 7.64062C91.7961 7.03125 91.4367 6.5 90.9758 6.04688C90.5227 5.58594 89.9875 5.22266 89.3703 4.95703C88.7609 4.69141 88.1086 4.55859 87.4133 4.55859H85.7375V14.6367H87.4133C88.1086 14.6367 88.7609 14.5078 89.3703 14.25C89.9875 13.9844 90.5227 13.625 90.9758 13.1719C91.4367 12.7109 91.7961 12.1758 92.0539 11.5664C92.3195 10.9492 92.4523 10.293 92.4523 9.59766ZM118.918 16.2773C118.137 16.9492 117.262 17.4648 116.293 17.8242C115.325 18.1836 114.321 18.3633 113.282 18.3633C112.485 18.3633 111.715 18.2578 110.973 18.0469C110.239 17.8438 109.547 17.5547 108.899 17.1797C108.258 16.7969 107.672 16.3398 107.141 15.8086C106.61 15.2773 106.153 14.6914 105.77 14.0508C105.395 13.4023 105.102 12.7109 104.891 11.9766C104.688 11.2344 104.586 10.4648 104.586 9.66797C104.586 8.87109 104.688 8.10156 104.891 7.35938C105.102 6.61719 105.395 5.92578 105.77 5.28516C106.153 4.63672 106.61 4.04688 107.141 3.51562C107.672 2.98438 108.258 2.53125 108.899 2.15625C109.547 1.77344 110.239 1.48047 110.973 1.27734C111.715 1.06641 112.485 0.960938 113.282 0.960938C114.321 0.960938 115.325 1.14062 116.293 1.5C117.262 1.85156 118.137 2.36719 118.918 3.04688L117.137 5.97656C116.645 5.44531 116.063 5.03906 115.391 4.75781C114.719 4.46875 114.016 4.32422 113.282 4.32422C112.54 4.32422 111.844 4.46484 111.196 4.74609C110.547 5.02734 109.981 5.41016 109.497 5.89453C109.012 6.37109 108.629 6.9375 108.348 7.59375C108.067 8.24219 107.926 8.93359 107.926 9.66797C107.926 10.4023 108.067 11.0938 108.348 11.7422C108.629 12.3828 109.012 12.9453 109.497 13.4297C109.981 13.9141 110.547 14.2969 111.196 14.5781C111.844 14.8594 112.54 15 113.282 15C114.016 15 114.719 14.8594 115.391 14.5781C116.063 14.2891 116.645 13.8789 117.137 13.3477L118.918 16.2773ZM137.208 9.66797C137.208 10.4648 137.103 11.2344 136.892 11.9766C136.689 12.7109 136.4 13.4023 136.025 14.0508C135.65 14.6914 135.196 15.2773 134.665 15.8086C134.134 16.3398 133.548 16.7969 132.907 17.1797C132.267 17.5547 131.575 17.8438 130.833 18.0469C130.091 18.2578 129.321 18.3633 128.525 18.3633C127.728 18.3633 126.958 18.2578 126.216 18.0469C125.482 17.8438 124.79 17.5547 124.142 17.1797C123.501 16.7969 122.915 16.3398 122.384 15.8086C121.853 15.2773 121.396 14.6914 121.013 14.0508C120.638 13.4023 120.345 12.7109 120.134 11.9766C119.931 11.2344 119.829 10.4648 119.829 9.66797C119.829 8.87109 119.931 8.10156 120.134 7.35938C120.345 6.61719 120.638 5.92578 121.013 5.28516C121.396 4.64453 121.853 4.05859 122.384 3.52734C122.915 2.99609 123.501 2.54297 124.142 2.16797C124.79 1.79297 125.482 1.50391 126.216 1.30078C126.958 1.08984 127.728 0.984375 128.525 0.984375C129.321 0.984375 130.091 1.08984 130.833 1.30078C131.575 1.50391 132.267 1.79297 132.907 2.16797C133.548 2.54297 134.134 2.99609 134.665 3.52734C135.196 4.05859 135.65 4.64453 136.025 5.28516C136.4 5.92578 136.689 6.61719 136.892 7.35938C137.103 8.10156 137.208 8.87109 137.208 9.66797ZM133.868 9.66797C133.868 8.93359 133.728 8.24219 133.446 7.59375C133.165 6.9375 132.782 6.37109 132.298 5.89453C131.821 5.41016 131.255 5.02734 130.599 4.74609C129.95 4.46484 129.259 4.32422 128.525 4.32422C127.782 4.32422 127.087 4.46484 126.439 4.74609C125.79 5.02734 125.224 5.41016 124.739 5.89453C124.255 6.37109 123.872 6.9375 123.591 7.59375C123.31 8.24219 123.169 8.93359 123.169 9.66797C123.169 10.4023 123.31 11.0938 123.591 11.7422C123.872 12.3828 124.255 12.9453 124.739 13.4297C125.224 13.9141 125.79 14.2969 126.439 14.5781C127.087 14.8594 127.782 15 128.525 15C129.259 15 129.95 14.8594 130.599 14.5781C131.255 14.2969 131.821 13.9141 132.298 13.4297C132.782 12.9453 133.165 12.3828 133.446 11.7422C133.728 11.0938 133.868 10.4023 133.868 9.66797ZM156.459 18H153.107V6C153.107 5.76562 153.06 5.54688 152.967 5.34375C152.881 5.14062 152.76 4.96484 152.603 4.81641C152.455 4.66016 152.279 4.53906 152.076 4.45312C151.873 4.36719 151.654 4.32422 151.42 4.32422C151.185 4.32422 150.967 4.36719 150.763 4.45312C150.56 4.53906 150.381 4.66016 150.224 4.81641C150.076 4.96484 149.959 5.14062 149.873 5.34375C149.787 5.54688 149.744 5.76562 149.744 6V18H146.381V6C146.381 5.76562 146.338 5.54688 146.252 5.34375C146.166 5.14062 146.045 4.96484 145.888 4.81641C145.74 4.66016 145.564 4.53906 145.361 4.45312C145.158 4.36719 144.939 4.32422 144.705 4.32422C144.47 4.32422 144.252 4.36719 144.049 4.45312C143.845 4.53906 143.666 4.66016 143.51 4.81641C143.361 4.96484 143.244 5.14062 143.158 5.34375C143.072 5.54688 143.029 5.76562 143.029 6V18H139.666V6C139.666 5.30469 139.795 4.65234 140.053 4.04297C140.318 3.42578 140.678 2.89062 141.131 2.4375C141.592 1.97656 142.127 1.61719 142.736 1.35938C143.353 1.09375 144.01 0.960938 144.705 0.960938C145.33 0.960938 145.931 1.07422 146.51 1.30078C147.088 1.51953 147.607 1.83984 148.068 2.26172C148.529 1.83984 149.045 1.51953 149.615 1.30078C150.193 1.07422 150.795 0.960938 151.42 0.960938C152.115 0.960938 152.767 1.09375 153.377 1.35938C153.994 1.61719 154.529 1.97656 154.982 2.4375C155.443 2.89062 155.803 3.42578 156.06 4.04297C156.326 4.65234 156.459 5.30469 156.459 6V18ZM163.194 4.55859V11.2852H166.557C167.018 11.2852 167.452 11.1992 167.858 11.0273C168.264 10.8477 168.62 10.6055 168.924 10.3008C169.229 9.99609 169.467 9.64062 169.639 9.23438C169.819 8.82031 169.909 8.38281 169.909 7.92188C169.909 7.46094 169.819 7.02734 169.639 6.62109C169.467 6.20703 169.229 5.84766 168.924 5.54297C168.62 5.23828 168.264 5 167.858 4.82812C167.452 4.64844 167.018 4.55859 166.557 4.55859H163.194ZM163.194 18H159.83V1.19531H166.557C167.174 1.19531 167.768 1.27734 168.338 1.44141C168.909 1.59766 169.44 1.82422 169.932 2.12109C170.432 2.41016 170.885 2.76172 171.291 3.17578C171.705 3.58203 172.057 4.03516 172.346 4.53516C172.643 5.03516 172.87 5.57031 173.026 6.14062C173.19 6.71094 173.272 7.30469 173.272 7.92188C173.272 8.84375 173.096 9.71484 172.745 10.5352C172.393 11.3477 171.913 12.0586 171.303 12.668C170.694 13.2773 169.979 13.7578 169.159 14.1094C168.346 14.4609 167.479 14.6367 166.557 14.6367H163.194V18ZM185.503 11.2852V7.92188C185.503 7.46094 185.413 7.02734 185.233 6.62109C185.062 6.20703 184.823 5.84766 184.519 5.54297C184.214 5.23828 183.855 5 183.44 4.82812C183.034 4.64844 182.601 4.55859 182.14 4.55859C181.679 4.55859 181.241 4.64844 180.827 4.82812C180.421 5 180.065 5.23828 179.761 5.54297C179.456 5.84766 179.214 6.20703 179.034 6.62109C178.862 7.02734 178.776 7.46094 178.776 7.92188V11.2852H185.503ZM188.866 18H185.503V14.6367H178.776V18H175.425V7.92188C175.425 6.99219 175.601 6.12109 175.952 5.30859C176.304 4.48828 176.78 3.77344 177.382 3.16406C177.991 2.55469 178.702 2.07422 179.515 1.72266C180.335 1.37109 181.21 1.19531 182.14 1.19531C183.069 1.19531 183.94 1.37109 184.753 1.72266C185.573 2.07422 186.288 2.55469 186.898 3.16406C187.507 3.77344 187.987 4.48828 188.339 5.30859C188.69 6.12109 188.866 6.99219 188.866 7.92188V18ZM191.16 6.23438C191.16 5.53906 191.293 4.88672 191.558 4.27734C191.824 3.66797 192.183 3.13672 192.636 2.68359C193.097 2.22266 193.633 1.85938 194.242 1.59375C194.851 1.32812 195.504 1.19531 196.199 1.19531H203.91V4.55859H196.199C195.965 4.55859 195.746 4.60156 195.543 4.6875C195.34 4.77344 195.16 4.89453 195.004 5.05078C194.855 5.19922 194.738 5.375 194.652 5.57812C194.566 5.78125 194.523 6 194.523 6.23438C194.523 6.46875 194.566 6.69141 194.652 6.90234C194.738 7.10547 194.855 7.28516 195.004 7.44141C195.16 7.58984 195.34 7.70703 195.543 7.79297C195.746 7.87891 195.965 7.92188 196.199 7.92188H199.562C200.258 7.92188 200.91 8.05469 201.519 8.32031C202.136 8.57812 202.672 8.9375 203.125 9.39844C203.586 9.85156 203.945 10.3867 204.203 11.0039C204.468 11.6133 204.601 12.2656 204.601 12.9609C204.601 13.6562 204.468 14.3086 204.203 14.918C203.945 15.5273 203.586 16.0625 203.125 16.5234C202.672 16.9766 202.136 17.3359 201.519 17.6016C200.91 17.8672 200.258 18 199.562 18H192.097V14.6367H199.562C199.797 14.6367 200.015 14.5938 200.218 14.5078C200.422 14.4219 200.597 14.3047 200.746 14.1562C200.902 14 201.023 13.8203 201.109 13.6172C201.195 13.4141 201.238 13.1953 201.238 12.9609C201.238 12.7266 201.195 12.5078 201.109 12.3047C201.023 12.1016 200.902 11.9258 200.746 11.7773C200.597 11.6211 200.422 11.5 200.218 11.4141C200.015 11.3281 199.797 11.2852 199.562 11.2852H196.199C195.504 11.2852 194.851 11.1523 194.242 10.8867C193.633 10.6211 193.097 10.2617 192.636 9.80859C192.183 9.34766 191.824 8.8125 191.558 8.20312C191.293 7.58594 191.16 6.92969 191.16 6.23438ZM206.192 6.23438C206.192 5.53906 206.325 4.88672 206.59 4.27734C206.856 3.66797 207.215 3.13672 207.668 2.68359C208.129 2.22266 208.664 1.85938 209.274 1.59375C209.883 1.32812 210.535 1.19531 211.231 1.19531H218.942V4.55859H211.231C210.996 4.55859 210.778 4.60156 210.575 4.6875C210.371 4.77344 210.192 4.89453 210.035 5.05078C209.887 5.19922 209.77 5.375 209.684 5.57812C209.598 5.78125 209.555 6 209.555 6.23438C209.555 6.46875 209.598 6.69141 209.684 6.90234C209.77 7.10547 209.887 7.28516 210.035 7.44141C210.192 7.58984 210.371 7.70703 210.575 7.79297C210.778 7.87891 210.996 7.92188 211.231 7.92188H214.594C215.289 7.92188 215.942 8.05469 216.551 8.32031C217.168 8.57812 217.703 8.9375 218.157 9.39844C218.617 9.85156 218.977 10.3867 219.235 11.0039C219.5 11.6133 219.633 12.2656 219.633 12.9609C219.633 13.6562 219.5 14.3086 219.235 14.918C218.977 15.5273 218.617 16.0625 218.157 16.5234C217.703 16.9766 217.168 17.3359 216.551 17.6016C215.942 17.8672 215.289 18 214.594 18H207.129V14.6367H214.594C214.828 14.6367 215.047 14.5938 215.25 14.5078C215.453 14.4219 215.629 14.3047 215.778 14.1562C215.934 14 216.055 13.8203 216.141 13.6172C216.227 13.4141 216.27 13.1953 216.27 12.9609C216.27 12.7266 216.227 12.5078 216.141 12.3047C216.055 12.1016 215.934 11.9258 215.778 11.7773C215.629 11.6211 215.453 11.5 215.25 11.4141C215.047 11.3281 214.828 11.2852 214.594 11.2852H211.231C210.535 11.2852 209.883 11.1523 209.274 10.8867C208.664 10.6211 208.129 10.2617 207.668 9.80859C207.215 9.34766 206.856 8.8125 206.59 8.20312C206.325 7.58594 206.192 6.92969 206.192 6.23438Z"
                    fill="#2A367C" />
            </svg>
            <ul class="header__nav">
                <li id="home" class="header__nav-item" >
                    <a class="header__nav-link" href="./index.html" onclick="handleClick('./index.html')">HOME</a>
                </li>
                <li id="about" class="header__nav-item"><a class="header__nav-link" href="./about.html" onclick="handleClick('./about.html')">ABOUT</a></li>
                <li id="ourProducts" class="header__nav-item"><a class="header__nav-link" href="./ourProducts.html" onclick="handleClick('./ourProducts.html')">OUR PRODUCTS</a></li>
                <li id="news" class="header__nav-item"><a class="header__nav-link" href="./news.html" onclick="handleClick('./news.html')">NEWS</a></li>
                <li id="ourTeam" class="header__nav-item"><a class="header__nav-link" href="./ourTeam.html" onclick="handleClick('./ourTeam.html')">OUR TEAM</a></li>
                <li id="contact" class="header__nav-item"><a class="header__nav-link" href="./contact.html" onclick="handleClick('./contact.html')">CONTACT</a></li>
                <li id="blogs" class="header__nav-item"><a class="header__nav-link" href="./blogs.html"  onclick="handleClick('./blogs.html')">BLOGS</a></li>
            </ul>
        </div>
`+ header.innerHTML;
let pathname = window.location.pathname.replace("public", '');
pathname = pathname.replace(/\//g, '');
pathname = pathname.replace(".html", '');
if (pathname == "index" || pathname == "") {
  pathname = "home";
}

console.log(pathname);
const element = document.querySelector(`#${pathname}`);
element.classList.remove('header__nav-item');
element.classList.add('active');

// Hàm kiểm tra sự tồn tại của trang
async function checkPageExists(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    if (!response.ok) {
      // Chuyển đến trang 404 nếu không tìm thấy
      window.location.href = './404.html';
    }
  } catch (error) {
    console.error('Lỗi khi kiểm tra đường dẫn:', error);
    window.location.href = './404.html';
  }
}

// Kiểm tra trang khi nhấn vào liên kết
function handleClick(url) {
  console.log("hello");
  // event.preventDefault(); // Ngăn chặn việc tải trang mặc định
  checkPageExists(url);
}