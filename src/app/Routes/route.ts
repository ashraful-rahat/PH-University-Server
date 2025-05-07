import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.Routes";
import { userRoutes } from "../modules/student/user/user.route";

const router = Router();

const modulesRoutes: ReadonlyArray<{
  path: string;
  route: Router;
}> = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/students",
    route: StudentRoutes,
  },
];

// router.use("/users", userRoutes);
// router.use("/students", StudentRoutes);

modulesRoutes.forEach((route) => {
  router.use(route.path, route.route);
  //   console.log(`Mounted route: ${route.path}`);
});

export default router;
