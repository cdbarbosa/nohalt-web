import {
  HomeIcon,
  SearchIcon,
  MenuIcon,
  CheckCircleIcon,
  CheckIcon,
  FilterIcon,
  CloseIcon,
  SettingsIcon,
  TrashIcon,
  InfoIcon,
  EyeIcon,
  EyeOffIcon,
  EditIcon,
  AccountIcon,
  DotsIcon,
} from "../assets/icons";

export function Icons() {
  return (
    <div className="flex flex-row gap-8 flex-wrap">
      <AccountIcon />
      <SearchIcon />
      <HomeIcon />
      <MenuIcon />
      <CheckCircleIcon />
      <CheckIcon />
      <FilterIcon />
      <CloseIcon />
      <SettingsIcon />
      <TrashIcon />
      <InfoIcon />
      <EditIcon />
      <EyeIcon />
      <EyeOffIcon />
      <DotsIcon />
      <DotsIcon variant="vertical" />
    </div>
  );
}
