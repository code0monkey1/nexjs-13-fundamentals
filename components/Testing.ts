const roles = ['user','admin','super-admin'] as const

type RolesType = typeof roles

type Role = RolesType[0|1|2]


type SecondRole = RolesType[number]