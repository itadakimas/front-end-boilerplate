import config from "../config/config.js";
import paths from "../modules/paths.js";
import tasks from "../modules/tasks.js";

import { dest, src } from "gulp";

function staticFilesTask(callback)
{
  const options = {
    base: paths.relocate(config.common.paths.staticFiles.base)
  };
  const source = paths.relocate(config.common.paths.staticFiles.source);

  src(source, options)
    .on("error", (err) => tasks.error("staticFiles", callback, err))
    .pipe(dest(paths.relocate(config.common.paths.staticFiles.destination)))
    .on("error", (err) => tasks.error("staticFiles", callback, err))
    .on("end", () => tasks.success("staticFiles", callback));
}

export const isPublic = false;
export const func = staticFilesTask;
