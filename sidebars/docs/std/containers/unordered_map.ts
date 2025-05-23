import { SidebarItemConfig } from "@site/sidebars/types";
import {
  cat,
  docsClassCat,
} from "../../../common";

const sidebar: SidebarItemConfig = docsClassCat("unordered_map", "std/containers/maps/unordered_map", "", [
  "constructors",
  "destructors",
  "op:operator_assign",
  "m:get_allocator",
  cat("Element access"),
  "m:at",
  "op:operator_subscript",
  cat("Iterators"),
  "m:begin",
  "m:end",
  cat("Capacity"),
  "m:empty",
  "m:size",
  "m:max_size",
  cat("Modifiers"),
  "m:clear",
  "m:insert",
  ["m:insert_or_assign", "since-cpp17"],
  "m:emplace",
  "m:emplace_hint",
  ["m:try_emplace", "since-cpp17"],
  "m:erase",
  "m:swap",
  ["m:extract", "since-cpp17"],
  ["m:merge", "since-cpp17"],
  cat("Lookup"),
  "m:count",
  "m:find",
  ["m:contains", "since-cpp20"],
  "m:equal_range",
  cat("Bucket interface"),
  "m:begin_size_type",
  "m:end_size_type",
  "m:bucket_count",
  "m:max_bucket_count",
  "m:bucket_size",
  "m:bucket",
  cat("Hash policy"),
  "m:load_factor",
  "m:max_load_factor",
  "m:rehash",
  "m:reserve",
  cat("Observers"),
  "m:hash_function",
  "m:key_eq"
]);

export default sidebar;