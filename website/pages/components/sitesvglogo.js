export default function SiteLogo() {
    return <div className={"site-logo"}>
        <img alt="logo"
             src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyOC4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI0NDBweCIgaGVpZ2h0PSIyNTZweCIgdmlld0JveD0iMCAwIDQ0MCAyNTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ0MCAyNTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iI0VERURFRCIgZD0iTTMyLjksODkuOFYxOC40aDIwLjZjNS40LDAsOS41LDEuNiwxMi4zLDQuN2MyLjcsMyw0LjEsNy41LDQuMiwxMy4ybDAuMiwzMS42YzAuMSw3LjEtMS4yLDEyLjQtMy44LDE2LjINCgkJYy0yLjcsMy45LTcuMiw1LjktMTMuMyw1LjlIMzIuOXogTTUwLjgsNzMuOWMxLjQsMCwxLjctMC40LDEuNy0xLjZWMzcuNWMwLTEuNy0wLjItMi41LTAuMy0yLjhjMC0wLjEtMC4xLTAuMy0wLjItMC4zDQoJCWMtMC4xLDAtMC42LTAuMi0xLjYtMC4ydjM5LjdINTAuOHoiLz4NCgk8cGF0aCBmaWxsPSIjRURFREVEIiBkPSJNNzEuMyw4OS44VjI4LjNoMTcuN3YxLjhjMC4xLTAuMSwwLjMtMC4yLDAuNC0wLjNjMi0xLjUsNC42LTIuMiw3LjUtMi4yaDJ2MTUuNWgtMmMtMS44LDAtMy44LDAuMy01LjksMC44DQoJCWMtMS4xLDAuMi0xLjYsMC41LTIsMC42djQ1LjNINzEuM3oiLz4NCgk8cGF0aCBmaWxsPSIjRURFREVEIiBkPSJNMTEwLjgsOTAuNGMtNS4yLDAtOC45LTEuOC0xMC45LTUuNWMtMS44LTMuMy0yLjctNy44LTIuNy0xMy43YzAtNC45LDAuNi04LjUsMi0xMS4yDQoJCWMxLjQtMi44LDMuMy00LjksNS44LTYuMmMyLjItMS4yLDUuNS0yLjUsOS45LTMuOWwyLjQtMC44di00LjRjMC0xLjMtMC4zLTItMC41LTIuM2MtMC4zLTAuNC0wLjUtMC40LTAuNi0wLjRjMCwwLTAuMSwwLTAuNCwwLjMNCgkJYy0wLjMsMC4zLTAuNCwwLjgtMC40LDEuNXY1LjVIOTh2LTMuOWMwLTYuMiwxLjYtMTAuOCw0LjYtMTMuNmMzLjEtMi44LDcuNy00LjEsMTQuMy00LjFjNS4yLDAsOS42LDEuNCwxMi45LDQuMg0KCQljMy40LDIuOSw1LjIsNi45LDUuMiwxMi4xdjQ1LjhoLTE3LjdWODhDMTE1LjUsODkuNiwxMTMuMyw5MC40LDExMC44LDkwLjR6IE0xMTcuMSw2MC42Yy0wLjQsMC4zLTAuNywwLjYtMSwwLjkNCgkJYy0wLjcsMC44LTEsMi4xLTEsMy44djcuNGMwLDEuNCwwLjIsMy4xLDEuMSwzLjFjMC40LDAsMC40LTAuMSwwLjUtMC4yYzAuMy0wLjYsMC40LTEuMywwLjQtMi4zVjYwLjZ6Ii8+DQoJPHBvbHlnb24gZmlsbD0iI0VERURFRCIgcG9pbnRzPSIxNjUuNSw4OS44IDE2My4zLDcyLjIgMTYxLjMsODkuOCAxNDIuNSw4OS44IDEzNS4xLDI4LjMgMTUwLjksMjguMyAxNTIuOCw0My44IDE1NC41LDI4LjMgDQoJCTE3MCwyOC4zIDE3Miw0My44IDE3My42LDI4LjMgMTkwLjYsMjguMyAxODIuNyw4OS44IAkiLz4NCgk8cG9seWdvbiBmaWxsPSIjRURFREVEIiBwb2ludHM9IjE5MS44LDQyLjEgMTk0LjMsMzMgMTkwLjEsMzMgMTkwLjEsMTcuNiAyMDguNCwxNy42IDIwOC40LDMxLjEgMjAzLjgsNDIuMSAJIi8+DQoJPHBhdGggZmlsbD0iI0VERURFRCIgZD0iTTIyOS40LDg5LjhWNDQuOGMwLTAuOS0wLjItMS43LTAuNS0yLjJjLTAuMS0wLjItMC4yLTAuMy0wLjYtMC4zYy0wLjYsMC0wLjgsMC4yLTAuOSwwLjYNCgkJYy0wLjQsMS4xLTAuNiwyLjYtMC42LDQuNXY0Mi40aC0xNy43VjI4LjNoMTcuN3YxLjdjMS43LTEuNiw0LTIuNCw2LjYtMi40YzQuNSwwLDcuOSwxLjUsMTAuMiw0LjNjMi4xLDIuNywzLjIsNi42LDMuMiwxMS40djQ2LjQNCgkJSDIyOS40eiIvPg0KCTxwb2x5Z29uIGZpbGw9IiNFREVERUQiIHBvaW50cz0iMzA3LjIsODkuOCAzMDcuMiw2NC40IDMwMy4xLDg5LjggMjg3LjYsODkuOCAyODMuMSw2Mi45IDI4My4xLDg5LjggMjY2LjksODkuOCAyNjYuOSwxOC40IA0KCQkyOTEuMiwxOC40IDI5NS4xLDQ2LjggMjk5LDE4LjQgMzIzLjUsMTguNCAzMjMuNSw4OS44IAkiLz4NCgk8cmVjdCB4PSIzMjUuMiIgeT0iMTQuOSIgZmlsbD0iI0VERURFRCIgd2lkdGg9IjE3LjciIGhlaWdodD0iNzQuOSIvPg0KCTxwYXRoIGZpbGw9IiNFREVERUQiIGQ9Ik0zNjQuNiw4OS44VjQ0LjhjMC0wLjktMC4yLTEuNy0wLjUtMi4yYy0wLjEtMC4yLTAuMi0wLjMtMC42LTAuM2MtMC42LDAtMC44LDAuMi0wLjksMC42DQoJCWMtMC40LDEuMS0wLjYsMi42LTAuNiw0LjV2NDIuNGgtMTcuN1YyOC4zaDE3Ljd2MS43YzEuNy0xLjYsNC0yLjQsNi42LTIuNGM0LjUsMCw3LjksMS41LDEwLjIsNC4zYzIuMSwyLjcsMy4yLDYuNiwzLjIsMTEuNHY0Ni40DQoJCUgzNjQuNnoiLz4NCgk8cGF0aCBmaWxsPSIjRURFREVEIiBkPSJNMzk3LjMsOTAuNGMtNC4yLDAtNy4yLTEtOC45LTIuOWMtMS43LTEuOS0yLjYtNC43LTIuNi04LjZWNDVIMzgyVjMwLjVoMy44VjE4LjRoMTcuM3YxMi4yaDMuOVY0NWgtMy45DQoJCXYzMC4zYzAsMC40LDAsMC43LDAsMC45YzAuMywwLDAuNSwwLDAuNy0wLjFjMC42LTAuMSwxLTAuMSwxLjItMC4xaDJ2MTNsLTEuNSwwLjRjLTAuOSwwLjItMiwwLjUtMy42LDAuNw0KCQlDNDAwLjQsOTAuMywzOTguOSw5MC40LDM5Ny4zLDkwLjR6Ii8+DQoJPHBhdGggZD0iTTM0LjksMjAuNGgxOC42YzQuOCwwLDguNCwxLjMsMTAuOCw0QzY2LjcsMjcsNjgsMzEsNjgsMzYuMmwwLjIsMzEuNmMwLjEsNi42LTEuMSwxMS42LTMuNSwxNWMtMi40LDMuNC02LjMsNS0xMS43LDVIMzQuOQ0KCQlWMjAuNHogTTUwLjgsNzUuOWMyLjUsMCwzLjctMS4yLDMuNy0zLjZWMzcuNWMwLTEuNS0wLjEtMi43LTAuNC0zLjRjLTAuMi0wLjgtMC43LTEuMy0xLjMtMS41Yy0wLjYtMC4zLTEuNi0wLjQtMi45LTAuNGgtMS41djQzLjcNCgkJSDUwLjh6Ii8+DQoJPHBhdGggZD0iTTczLjMsMzAuM2gxMy43djYuNGMwLjctMi4yLDEuOS00LDMuNi01LjJjMS43LTEuMiwzLjgtMS44LDYuMy0xLjh2MTEuNWMtMS45LDAtNC4xLDAuMy02LjQsMC44Yy0yLjMsMC41LTMuNSwxLjItMy41LDEuOQ0KCQl2NDRINzMuM1YzMC4zeiIvPg0KCTxwYXRoIGQ9Ik0xMDEuNiw4NGMtMS42LTMtMi41LTcuMi0yLjUtMTIuN2MwLTQuNSwwLjYtOCwxLjgtMTAuNGMxLjItMi40LDIuOC00LjIsNC45LTUuM2MyLjEtMS4xLDUuMy0yLjQsOS42LTMuN2wzLjgtMS4zdi0wLjINCgkJdi01LjdjMC0xLjUtMC4zLTIuNy0wLjktMy41Yy0wLjYtMC44LTEuMy0xLjItMi4yLTEuMmMtMC43LDAtMS40LDAuMy0xLjksMWMtMC41LDAuNy0wLjgsMS42LTAuOCwyLjd2My41SDEwMHYtMS45DQoJCWMwLTUuNywxLjMtOS43LDQtMTIuMWMyLjYtMi40LDYuOS0zLjYsMTIuOS0zLjZjNC44LDAsOC42LDEuMiwxMS42LDMuN2MzLDIuNSw0LjUsNiw0LjUsMTAuNnY0My44aC0xMy43VjgxDQoJCWMtMC43LDIuNC0xLjgsNC4yLTMuMyw1LjVjLTEuNSwxLjMtMy4zLDItNS4zLDJDMTA2LjMsODguNCwxMDMuMyw4Ni45LDEwMS42LDg0eiBNMTE4LjQsNzYuNGMwLjQtMC45LDAuNy0xLjksMC43LTMuMnYtMTYNCgkJYy0yLDAuOC0zLjUsMS44LTQuNSwzYy0xLDEuMi0xLjUsMi45LTEuNSw1djcuNGMwLDMuNCwxLDUuMSwzLjEsNS4xQzExNy4zLDc3LjcsMTE4LDc3LjMsMTE4LjQsNzYuNHoiLz4NCgk8cGF0aCBkPSJNMTQ0LjMsODcuOGwtNy01Ny41aDExLjhsMy44LDMwLjlsMy4zLTMwLjloMTJsMy45LDMwLjlsMy4yLTMwLjloMTNMMTgxLDg3LjhoLTEzLjdsLTQuMS0zMi43bC0zLjYsMzIuN0gxNDQuM3oiLz4NCgk8cGF0aCBkPSJNMTk0LjQsNDAuMWwyLjUtOS4xaC00LjlWMTkuNmgxNC40djExLjFsLTMuOSw5LjRIMTk0LjR6Ii8+DQoJPHBhdGggZD0iTTIxMS4xLDMwLjNoMTMuN3Y3LjNjMC42LTIuNCwxLjYtNC4zLDMtNS43YzEuNC0xLjUsMy4zLTIuMiw1LjctMi4yYzMuOSwwLDYuNywxLjIsOC42LDMuNmMxLjksMi40LDIuOCw1LjgsMi44LDEwLjJ2NDQuNA0KCQloLTEzLjVWNDQuOGMwLTEuMy0wLjItMi4zLTAuNy0zLjJjLTAuNS0wLjktMS4zLTEuMy0yLjMtMS4zYy0xLjQsMC0yLjMsMC42LTIuOCwxLjljLTAuNCwxLjMtMC43LDMtMC43LDUuMXY0MC40aC0xMy43VjMwLjN6Ii8+DQoJPHBhdGggZD0iTTI2OC45LDg3LjhWMjAuNGgyMC42bDUuNyw0MS4xbDUuNy00MS4xaDIwLjd2NjcuNGgtMTIuM1YzOS4ybC03LjgsNDguNmgtMTIuMWwtOC4yLTQ4LjZ2NDguNkgyNjguOXoiLz4NCgk8cGF0aCBkPSJNMzI3LjIsMjYuNXYtOS42aDEzLjd2OS42SDMyNy4yeiBNMzI3LjIsODcuOFYzMC4zaDEzLjd2NTcuNUgzMjcuMnoiLz4NCgk8cGF0aCBkPSJNMzQ2LjMsMzAuM2gxMy43djcuM2MwLjYtMi40LDEuNi00LjMsMy01LjdjMS40LTEuNSwzLjMtMi4yLDUuNy0yLjJjMy45LDAsNi43LDEuMiw4LjYsMy42YzEuOSwyLjQsMi44LDUuOCwyLjgsMTAuMnY0NC40DQoJCWgtMTMuNVY0NC44YzAtMS4zLTAuMi0yLjMtMC43LTMuMmMtMC41LTAuOS0xLjMtMS4zLTIuMy0xLjNjLTEuNCwwLTIuMywwLjYtMi44LDEuOWMtMC40LDEuMy0wLjcsMy0wLjcsNS4xdjQwLjRoLTEzLjdWMzAuM3oiLz4NCgk8cGF0aCBkPSJNMzg5LjksODYuMWMtMS40LTEuNS0yLTQtMi03LjNWNDNIMzg0VjMyLjVoMy44VjIwLjRoMTMuM3YxMi4yaDMuOVY0M2gtMy45djMyLjNjMCwxLDAuMSwxLjcsMC4yLDIuMg0KCQljMC4yLDAuNSwwLjYsMC43LDEuMywwLjdjMC41LDAsMSwwLDEuNS0wLjFjMC41LTAuMSwwLjgtMC4xLDAuOS0wLjF2OS40Yy0wLjgsMC4yLTEuOSwwLjQtMy40LDAuN2MtMS41LDAuMi0yLjksMC40LTQuNCwwLjQNCgkJQzM5My43LDg4LjQsMzkxLjMsODcuNywzODkuOSw4Ni4xeiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggZmlsbD0iI0VERURFRCIgZD0iTTIxMi40LDIzNS44Yy0xNi0xLjUtMzEuNC0xMC00Mi4yLTIzLjNjLTEwLjktMTMuNS0xNS43LTMwLjQtMTMuNi00Ny41bDAuMi0xLjhIMTk2di0yOC45DQoJCWMtMSwwLjYtMS45LDEuMy0yLjksMS45Yy01LjEsMy44LTkuNCw4LjYtMTIuNiwxNC4zYy0wLjUsMC45LTEuNiwxLjgtMi44LDEuOGMtMy4xLDAtNi4zLDAtOS40LDBsLTksMGwxLTIuNw0KCQljMy42LTkuNSw5LjItMTcuNiwxNi41LTI0LjNjMTIuOS0xMS43LDI2LjUtMTUuMywzNS42LTE2LjJsMi4yLTAuMmwwLDEyN0wyMTIuNCwyMzUuOHogTTE3NS44LDE4MS45YzEsNSwyLjksOS43LDUuNywxNC4zDQoJCWMzLjYsNS45LDguNSwxMC44LDE0LjQsMTQuNXYtMjguOEgxNzUuOHoiLz4NCgk8cGF0aCBmaWxsPSIjRURFREVEIiBkPSJNMjI1LjQsMTA5bDIuMiwwLjJjMTYsMS41LDMxLjQsMTAsNDIuMiwyMy4zYzEwLjksMTMuNSwxNS43LDMwLjQsMTMuNiw0Ny41bC0wLjIsMS44SDI0NHYyOC45DQoJCWMxLTAuNiwxLjktMS4zLDIuOS0xLjljNS4xLTMuOCw5LjQtOC42LDEyLjYtMTQuM2MwLjUtMC45LDEuNi0xLjgsMi44LTEuOGMzLjEsMCw2LjMsMCw5LjQsMGw5LDBsLTEsMi43DQoJCWMtMy42LDkuNS05LjIsMTcuNi0xNi41LDI0LjNjLTEyLjksMTEuNy0yNi41LDE1LjMtMzUuNiwxNi4ybC0yLjIsMC4yTDIyNS40LDEwOXogTTI2NC4yLDE2My4yYy0xLTUtMi45LTkuNy01LjctMTQuMw0KCQljLTMuNi01LjktOC41LTEwLjgtMTQuNC0xNC41djI4LjhIMjY0LjJ6Ii8+DQoJPHBhdGggZD0iTTIxMi42LDExMS4yYy0xMC44LDEuMS0yMy4yLDUuNS0zNC40LDE1LjdjLTcuMiw2LjUtMTIuNSwxNC40LTE2LDIzLjVjNS4zLDAsMTAuNCwwLDE1LjUsMGMwLjQsMCwwLjgtMC40LDEtMC44DQoJCWMzLjMtNS45LDcuNy0xMC45LDEzLjItMTVjMS44LTEuNCwzLjgtMi41LDUuNy0zLjhjMC4xLDAuMSwwLjIsMC4yLDAuMywwLjJjMCw3LjksMCwzNC4xLDAsMzQuMWMtMTMuNCwwLTI0LDAtMzkuMywwDQoJCWMtNC41LDM1LjksMjMuMiw2NS44LDU0LDY4LjZDMjEyLjYsMjMyLjYsMjEyLjYsMTI1LjgsMjEyLjYsMTExLjJ6IE0xOTgsMjE0LjFjLTcuNi00LjEtMTMuNy05LjctMTguMS0xNi45DQoJCWMtMy4zLTUuMy01LjUtMTEtNi40LTE3LjRjMTAuMiwwLDE2LjYsMCwyNC41LDBDMTk4LDE3OS45LDE5OCwyMDUuMSwxOTgsMjE0LjF6Ii8+DQoJPHBhdGggZD0iTTIyNy40LDIzMy44YzEwLjgtMS4xLDIzLjItNS41LDM0LjQtMTUuN2M3LjItNi41LDEyLjUtMTQuNCwxNi0yMy41Yy01LjMsMC0xMC40LDAtMTUuNSwwYy0wLjQsMC0wLjgsMC40LTEsMC44DQoJCWMtMy4zLDUuOS03LjcsMTAuOS0xMy4yLDE1Yy0xLjgsMS40LTMuOCwyLjUtNS43LDMuOGMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJjMC03LjksMC0zNC4xLDAtMzQuMWMxMy40LDAsMjQsMCwzOS4zLDANCgkJYzQuNS0zNS45LTIzLjItNjUuOC01NC02OC42QzIyNy40LDExMi40LDIyNy40LDIxOS4zLDIyNy40LDIzMy44eiBNMjQyLDEzMC45YzcuNiw0LjEsMTMuNyw5LjcsMTguMSwxNi45YzMuMyw1LjMsNS41LDExLDYuNCwxNy40DQoJCWMtMTAuMiwwLTE2LjYsMC0yNC41LDBDMjQyLDE2NS4yLDI0MiwxNDAsMjQyLDEzMC45eiIvPg0KPC9nPg0KPC9zdmc+DQo="/>
    </div>
}