export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center p-4 mt-12 border-t">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Trove Market. All rights reserved.
      </p>
    </footer>
  );
}
